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
import Diri from "./View/DataDiri/Datadiri";
import Uang from "./View/Finance/Finance";
import Malam from "./View/IzinBermalam/IzinBermalam";
import Keluar from "./View/IzinKeluar/IzinKeluar";
import Berita from "./View/Pengumuman/Pengumuman";
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
                    <Route path="/DataDiri" component={Diri}/>
                    <Route path="/finance" component={Uang}/>
                    <Route path="/izinBermalam" component={Malam}/>
                    <Route path="/izinKeluar" component={Keluar}/>
                    <Route path="/Pengumuman" component={Berita}/>
                </Switch>
            </Router>
        )
    }
}