import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";

import SignIn from "./View/login";
import Dashboard from "./View/Home/Home";
import history from "./history";

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route exact path="/">
                        <Redirect to="/signin" />
                    </Route>
                    <Route path="/signin" exact component={SignIn} />
                    <Route path="/Dashboard" exact component={Dashboard} />
                </Switch>
            </Router>
        )
    }
}