import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import SingIn from "./Components/SingIn";
import SingUp from "./Components/SingUp";

class App extends Component {
    render() {
        return (
            <div>
                <Router basename="/react-hw-18/">
                    <Switch>
                        <Route exact path="/" render={() => <Redirect to="/login" />} />
                        <Route exact path="/login" component={SingIn}/>
                        <Route exact path="/register" component={SingUp}/>
                    </Switch>
                </Router>

            </div>
        )

    }
}


export default App;
