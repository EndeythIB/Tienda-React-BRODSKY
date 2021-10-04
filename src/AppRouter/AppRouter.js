import React from "react";
import {Route, Switch, BrowserRouter, Redirect} from "react-router-dom";
import HomePage from "../Pages/HomePage";
import ContactPage from "../Pages/ContactPage"
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import NavBar from "../components/NavBar/NavBar";


export default function AppRouter() {
    return (
        <BrowserRouter>
            <NavBar/>
            <Switch>
                <Route path="/contact" component={ContactPage}/>
                <Route path="/category/:catId" component={HomePage}/>
                <Route path="/detail/:idItem" component={ItemDetailContainer}/>
                <Route exact path="/" component={HomePage}/>
                <Route path="*"><Redirect to="/"/></Route>
            </Switch>
        </BrowserRouter>
    )

}

