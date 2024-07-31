import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar/navbar';
import { footer as Footer } from './components/Footer/footer';

function App() {
    return (
    <Router>
        <Navbar/>
        <Switch>
            <Route path="/">
                <Home />
            </Route>
        </Switch> 
        <Footer/>
    </Router>
    );
}

export default App;
