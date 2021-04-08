import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Agenda from "./agenda";
import Login from "./login";

const rootElement = document.getElementById("root");
ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/agenda" component={Agenda} />
            <Route path="/login" component={Login} />
        </Switch>
    </BrowserRouter>,
    rootElement
);
