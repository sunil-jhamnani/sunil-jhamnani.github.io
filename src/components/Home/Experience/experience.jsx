import React from "react";
import { ReactComponent as WorkIcon } from "./work.svg";
import { ReactComponent as SchoolIcon } from "./school.svg";
import { ReactComponent as OpenSourceIcon } from "./open-source.svg";
import { ReactComponent as SpeakerIcon } from "./conference-speaker.svg";
// conference-speaker
import timelineElements from "./timeline";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
import "./experience.css";
const iconDetails = {
  work: {
    element: <WorkIcon />,
    style: { background: "#06D6A0" },
  },
  "open-source": {
    element: <OpenSourceIcon />,
    style: { background: "#f9c74f" },
  },
  speaker: {
    element: <SpeakerIcon />,
    style: { background: "#01CEFE" },
  },
};
function Experience() {
  let workIconStyles = { background: "#06D6A0" };
  let schoolIconStyles = { background: "#f9c74f" };

  return (
    <section id="about">
      <div class="container">
        <h2 className="title">My Experiences</h2>
        <VerticalTimeline className="vertical-timeline-container">
          {timelineElements.map((element) => {
            let isWorkIcon = element.icon === "work";
            let showButton =
              element.buttonText !== undefined &&
              element.buttonText !== null &&
              element.buttonText !== "";

            return (
              <VerticalTimelineElement
                key={element.key}
                date={element.date}
                dateClassName="vertical-timeline--date"
                iconStyle={iconDetails[element.icon].style}
                icon={iconDetails[element.icon].element}
              >
                <h3 className="vertical-timeline-element-title">
                  {element.title}
                </h3>
                <h5 className="vertical-timeline-element-subtitle">
                  {element.location}
                </h5>
                <p id="description" class="description" dangerouslySetInnerHTML={{__html: element.description}}></p>
                {showButton && (
                  <a
                    className={`button ${
                      isWorkIcon ? "workButton" : "schoolButton"
                    }`}
                    href={element.link}
                  >
                    {element.buttonText}
                  </a>
                )}
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
    </section>
  );
}

export default Experience;
