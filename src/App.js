import React, { Fragment } from 'react';
import './sass/styles.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {hot} from "react-hot-loader";
import Home from './pages/Home';
import Contact from './pages/Contact';
import Dollface from './pages/dollface/Dollface';
import ScrollToTop from './pages/ScrollToTop';
import Angela_website from './pages/angela_contreras/Angela_website';
import Pabl from './pages/PABL/Pabl';

const App = () => {
    return (
        <BrowserRouter>
            <Fragment>
                <ScrollToTop />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/dollface" component={Dollface} />
                    <Route path="/angela_contreras" component={Angela_website} />
                    <Route path="/pabl" component={Pabl} />
                </Switch>
            </Fragment>
        </BrowserRouter>
    )
}

export default hot(module)(App);
