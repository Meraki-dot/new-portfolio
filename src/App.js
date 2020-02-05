import React, { Fragment } from 'react';
import './sass/styles.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Dollface from './pages/Dollface';
import Llcc_cm from './pages/Llcc_cm';
import ScrollToTop from './pages/ScrollToTop';

const App = () => {
    return (
        <BrowserRouter>
            <Fragment>
                <ScrollToTop />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/dollface" component={Dollface} />
                    <Route path="/llcc_cm" component={Llcc_cm} />
                </Switch>
            </Fragment>
        </BrowserRouter>
    )
}

export default (App);
