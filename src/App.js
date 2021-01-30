import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import Home from './pages/Home/Home.js';
import Services from './pages/Services/Services.js';
import Help from './pages/Help/Help.js';
import About from './pages/About/About.js';
import Family from './pages/Family/Family.js';
import Story from './pages/Story/Story.js';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import HeaderButtons from './components/Mobile/HeaderButtons.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function App()
{
    return (
        <Router>
            <Header />
            <HeaderButtons />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/services">
                    <Services />
                </Route>
                <Route exact path="/services/get-help">
                    <Help />
                </Route>
                <Route exact path="/about">
                    <About />
                </Route>
                <Route exact path="/souls-family">
                    <Family />
                </Route>
                <Route exact path="/our-story">
                    <Story />
                </Route>
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;
