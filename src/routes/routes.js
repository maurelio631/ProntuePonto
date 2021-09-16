import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";

import Login from "../Views/Login";
import ForgotPassword from "../Views/ForgotPassword";
import MainPage from "../Views/MainPage";

export default function Routes (){
    return(
        <Router>
            <Route component={Login} path="/" exact/>
            <Route component={ForgotPassword} path="/ForgotPassword"/>
            <Route component={MainPage} path="MainPage"/>
        </Router>
    )
}