import React from "react";
import {Route, Switch, BrowserRouter} from "react-router-dom";
import HomePage from "../Pages/HomePage";
import ContactPage from "../Pages/ContactPage"
import NotFound from "../Pages/NotFound";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import NavBar from "../components/NavBar/NavBar";


export default function AppRouter() {
    return (
        <BrowserRouter>
            <NavBar/>
            <Switch>
                <Route path="/contact" component={ContactPage}/>
                <Route path ="/detail" component={ItemDetailContainer}/>
                <Route exact path="/" component={HomePage}/>
                <Route path="*" component={NotFound}/>
            </Switch>
        </BrowserRouter>
    )

}

