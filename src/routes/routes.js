import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Ficha from "../Views/Ficha";

export default function Routes (){
    return(
        <Router>
           <Route component={Ficha} path="/"/>
        </Router>
    )
}