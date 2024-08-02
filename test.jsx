import React from 'react'
import { connect } from 'react-redux'
import { namespace } from '../namespace'
import DropDown from 'unity-uikit/Dropdown'
import Flex from 'unity-uikit/Flex'
import {Text} from 'unity-uikit/Typography'
import Button from 'unity-uikit/Button'
import Portlet from 'unity-uikit/Portlet'
import Spinner from 'unity-uikit/Spinner'
import {Link} from 'main/Link'
import DateTime from 'react-datetime'
import AllocationTable from '../components/CapacityPlan/AllocationTable.jsx'
import DateCarousel from '../components/CapacityPlan/DateCarousel.jsx'
import styles from '~/assets/cssmod/capacityplan.css'
import classNames from 'classnames/bind'
import { flattenCapacityPlanData, DAYS_IN_MONTH } from '../util/capacityPlan'
import moment from 'moment'
import context from 'unity-context'
import Permissions from '../constants/Permissions'

const cx = classNames.bind(styles);
import { fetchWarehouses, fetchBusinessLines, fetchBusinessUnits, selectBusinessUnits, setBusinessUnitsError,
     selectWarehouse, selectBusinessLine, selectBusinessUnit, fetchCapacityPlan, uploadCapacityPlan,
     toggleCapacityPlanView, updateCapacityPlan, updateCapacityPlanError, selectSlotWindow, moveSlotWindow,
     updateDailySlot, updateDailySlotError, updateDateRange, resetBusinessUnits } from '../actions/capacityPlan'
import {pick, isEmpty, get, values, includes, filter, each, every, keys, pickBy} from 'lodash'


class CapacityPlanNew extends React.Component {

    componentDidMount = () => {
        if(isEmpty(this.props.warehouses.data) && !this.props.warehouses.isFetching) {
            this.props.dispatch(fetchWarehouses())
        }
        if(isEmpty(this.props.businessLines.data) && !this.props.businessLines.isFetching) {
            this.props.dispatch(fetchBusinessLines())
        }
    }

    fetchCapacityPlan = (options) => {
        if(this.props.warehouses.selectedValue && this.props.businessLines.selectedValue && !this.props.capacityPlan.isFetching) {
            this.props.dispatch(fetchCapacityPlan(options))
            this.props.dispatch(resetBusinessUnits())
        }
    }

    handleWarehouseSelect = (selectedWarehouse) => {
        if(this.props.warehouses.selectedValue !== selectedWarehouse) {
            this.props.dispatch(selectWarehouse(selectedWarehouse))
            this.fetchCapacityPlan({warehouseId: selectedWarehouse})
        }
    }

    handleBLSelect = (selectedBL) => {
        if(selectedBL !== this.props.businessLines.selectedValue) {
            this.props.dispatch(selectBusinessLine(selectedBL))
            this.fetchCapacityPlan({
                businessLine: selectedBL,
                groupingDuration: this.props.businessLines.businessLineMap[selectedBL].groupingDuration - 1
            })
            if(!this.props.businessUnits[selectedBL]) {
                this.props.dispatch(fetchBusinessUnits(selectedBL))
            } else {
                this.props.dispatch(selectBusinessUnits(selectedBL))
            }
        }
    }

    handleBUSelect = (bu, selected) => {
        this.props.dispatch(selectBusinessUnit(bu, selected))
    }

    renderDropdown = (type, optionKey, label, handleSelect) => {
        let dropdownType = this.props[type]
        return !isEmpty(get(dropdownType, optionKey))? (
            <Flex container>
                <Text className={styles.dropdownLabel}>{label}</Text>
                <div className={styles.dropdownValue}>
                    <DropDown
                        options={get(dropdownType, optionKey)}
                        value={dropdownType.selectedValue}
                        icon="fa fa-caret-down"
                        onChange={handleSelect}
                        optionsWidth="150px"
                    />
                </div>
            </Flex>
        ): null;
    }

    validateSlotCapacity = (capacity) => {
        return /^\d+$/.test(capacity)
    }

    onSlotSelect = (index) => {
        if(index !== this.props.capacityPlan.selectedWindow) {
            this.props.dispatch(selectSlotWindow(index))
        }
    }

    onAllocationSlotUpdate = (capacity, key, index) => {
        this.validateSlotCapacity(capacity)?
            this.props.dispatch(updateCapacityPlan(capacity, key, index)):
            this.props.dispatch(updateCapacityPlanError(capacity, key, index, 'Invalid capacity'))
    }

    onCarouselSlotUpdate = (capacity, date) => {
        this.validateSlotCapacity(capacity)?
            this.props.dispatch(updateDailySlot(capacity, date)):
            this.props.dispatch(updateDailySlotError(capacity, date, 'Invalid capacity'))
    }

    toggleAllocation = () => {
        if(every(values(this.props.businessUnits.selectedAllocationBUs), value => !value)) {
            this.props.dispatch(setBusinessUnitsError('Please select some BUs to allocate'))
        } else {
            const payload = {}
            if(this.props.capacityPlan.allocate) {
                const businessLineName = this.props.businessLines.selectedValue
                const {flattenedCapacityPlan, slots} = flattenCapacityPlanData(this.props.capacityPlan.master,
                    this.props.businessLines.businessLineMap[businessLineName],
                    this.props.businessUnits[businessLineName].data)
                payload.data = flattenedCapacityPlan
                payload.slots = slots
            }
            this.props.dispatch(toggleCapacityPlanView(payload));
        }
    }

    onSlideWindow = (move) => {
        if((move === 1 && this.props.capacityPlan.selectedWindow < (this.props.capacityPlan.noOfWeeks - 1)) ||
        (move === -1 && this.props.capacityPlan.selectedWindow > 0)) {
            this.props.dispatch(moveSlotWindow(move))
        }
    }

    uploadCapacityPlan = () => {
        if(this.validateCapacityPlan() && !this.props.capacityPlan.isUpdating) {
            this.props.dispatch(uploadCapacityPlan())
            this.props.dispatch(resetBusinessUnits())
        }
    }

    validateCapacityPlan = () => {
        var slots = this.props.capacityPlan.slots;
        var selectedWindow = -1;
        each(this.props.capacityPlan.master, (entry, i) => {
            var currentDate = moment(entry.startDate, 'DD-MM-YYYY')
            var endDate = moment(entry.endDate, 'DD-MM-YYYY')
            var totalAvailable = 0
            for(; !currentDate.isAfter(endDate); currentDate.add(1, 'days')) {
                totalAvailable += slots[currentDate.format('DD-MM-YYYY')].available
            }
            if(this.props.capacityPlan.data.total[i].available !== totalAvailable) {
                selectedWindow = i
                return
            }

        })
        if(selectedWindow >= 0) {
            this.props.dispatch(moveSlotWindow(selectedWindow - this.props.capacityPlan.selectedWindow, 'Please adjust slot capacities'))
            return false
        }
        return true
    }

    renderBUSelect = () => {
        return (<MultiSelect options={this.getBUMaster()} multi={true}/>)
    }

    onDateChange = (value) => {
        if(this.props.dateRange.startDate.format("MMM YYYY") !== value) {
            this.props.dispatch(updateDateRange(moment(value)))
            this.fetchCapacityPlan({startDate: moment(value).startOf('month'), endDate: moment(value).endOf('month')})
        }
    }

    getBUMaster = () => {
        const businessLine = this.props.businessLines.selectedValue
        return get(this, `props.businessUnits[${businessLine}].data`) || []
    }

    getSelectedBusinessUnits = () => {
        const selectedAllocationBUs = keys(pickBy(this.props.businessUnits.selectedAllocationBUs, value => value))
        const selectedBUs = this.props.capacityPlan.allocate? selectedAllocationBUs: this.props.businessUnits.selectedBUs
        const businessUnits = this.getBUMaster()
        return filter(businessUnits, bu => includes(selectedBUs, bu.value))
    }

    render() {
        let businessLine = this.props.businessLines.selectedValue
        const groupingDuration = (this.props.businessLines.businessLineMap[businessLine] || {}).groupingDuration
        let dateRange = this.props.dateRange
        let allocate = this.props.capacityPlan.allocate
        let slotCarousel = ''
        let confirmationButtons = ''
        let capacityPlanLoading = this.props.capacityPlan.isFetching? <div className={styles.spinner}><Spinner /></div>: null
        let capacityPlanUploading = this.props.capacityPlan.isUploading? <div className={styles.spinner}><Spinner  text='Uploading'/></div>: null
        let businessUnits = this.getSelectedBusinessUnits()
        let selectedWindow = this.props.capacityPlan.selectedWindow
        let selectedWeek = groupingDuration === DAYS_IN_MONTH? 0: selectedWindow
        let error = this.props.businessUnits.error || this.props.capacityPlan.error
        let success = this.props.capacityPlan.success
        let allocateMenu = (<Flex container between className={styles.menu}>
            {this.renderDropdown('warehouses', 'data', 'Select Warehouse', this.handleWarehouseSelect)}
            {this.renderDropdown('businessLines', 'data', 'Select Business Lines', this.handleBLSelect)}
            {context.user.hasPermissions(Permissions.capacityPlanWrite) ? <Button onClick={this.toggleAllocation}>START ALLOCATION</Button> : null}
        </Flex>)
        let monthPicker = (<Flex container className={styles.monthpicker}>
            <div className={styles.monthLabel}>Select Month</div>
            <DateTime
                value={dateRange.startDate.format("MMM YYYY")}
                dateFormat="MMM YYYY"
                timeFormat={false}
                closeOnSelect
                onChange={this.onDateChange}
            />
        </Flex>)
        let downloadButton = (<Link
            className={styles.downloadLink}
            href={`/InwardAssist/capacity-plan/${dateRange.endDate.month() + 1}/${dateRange.startDate.year()}`}>
                Download Capacity plan
        </Link>)
        if(allocate) {
            slotCarousel = (<DateCarousel
                slots={this.props.capacityPlan.slots}
                dateRange={dateRange}
                window={7}
                onSlide={this.onSlideWindow}
                onChange={this.onCarouselSlotUpdate}
                total={this.props.capacityPlan.data.total}
                selectedWindow={selectedWindow}
                selectedWeek={selectedWeek}
                businessLine={businessLine}
                groupingDuration={groupingDuration}
                />)

            confirmationButtons = (
                <Flex container end className={styles.menu}>
                    <Button onClick={this.uploadCapacityPlan} className={styles.done}>DONE</Button>
                    <Button onClick={this.toggleAllocation}  modifier='secondary'>CANCEL</Button>
                </Flex>
            )
            monthPicker = ''
            allocateMenu = confirmationButtons
            downloadButton = ''
        }
        let allocationTable = capacityPlanLoading || capacityPlanUploading || (<AllocationTable
            selectedAllocationBUs={this.props.businessUnits.selectedAllocationBUs}
            businessUnits={businessUnits}
            handleBUSelect={this.handleBUSelect}
            readOnly={!this.props.capacityPlan.allocate}
            capacityPlan={this.props.capacityPlan.data}
            onChange={this.onAllocationSlotUpdate}
            onSlotSelect={this.onSlotSelect}
            selectedWeek={this.props.capacityPlan.allocate && (selectedWeek + 1)}/>)

        if(!isEmpty(error)) {
            swal({
                title: 'Error',
                text: error,
                type: 'warning'
            })
        }
        if(!isEmpty(success)) {
            swal({
                title: 'Success',
                text: success,
                type: 'success'
            })
        }
        return (<div>
            {!capacityPlanUploading? allocateMenu: null}
            <Portlet>
                <Flex container between className={styles.header}>
                    <div>
                        <span className={styles.title}>{(businessLine === "MFB"? 'Brands': 'Business Units') + ' Allocation'}</span>
                        {allocate? '': <div className={styles.subTitle}><span>{'* Total Quantity '}</span><span className={styles.slotAvailable}>{'(Available quantity)'}</span></div>}
                    </div>
                    <Flex container>
                        {monthPicker}
                        {downloadButton}
                    </Flex>
                </Flex>
                {allocationTable}
            </Portlet>
            {!capacityPlanUploading? slotCarousel: null}
        </div>);
    }
}

const mapStateToProps = state => pick(state[namespace], 'warehouses', 'businessLines', 'businessUnits', 'capacityPlan', 'dateRange')
export default connect(mapStateToProps)(CapacityPlanNew)
