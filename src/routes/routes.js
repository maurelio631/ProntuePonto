import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Ficha from "../Views/Ficha";
import LocalDor from "../Views/LocalDor";

export default function Routes (){
    return(
        <Router>
           <Route component={LocalDor} path="/"/>
        </Router>
    )
}