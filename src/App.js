import React from 'react';
// import { hot } from "react-hot-loader";
import './sass/styles.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Dollface from './pages/Dollface';
import Llcc_cm from './pages/Llcc_cm';

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/contact" component={Contact} />
                <Route path="/dollface" component={Dollface} />
                <Route path="/llcc_cm" component={Llcc_cm} />
            </Switch>
        </BrowserRouter>
    )
}

export default (App);
