import React from "react";
import {Route, Switch, BrowserRouter, Redirect} from "react-router-dom";
import HomePage from "../Pages/HomePage";
import ContactPage from "../Pages/ContactPage"
import CartPage from "../Pages/CartPage";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import NavBar from "../components/NavBar/NavBar";


export default function AppRouter() {
    return (
        <BrowserRouter>
            <NavBar/>
            <Switch>
                <Route exact path="/contact" component={ContactPage}/>
                <Route exact path="/category/:catId" component={HomePage}/>
                <Route exact path="/detail/:idItem" component={ItemDetailContainer}/>
                <Route exact path="/cart" component={CartPage}/>
                <Route exact path="/" component={HomePage}/>
                <Route path="*"><Redirect to="/"/></Route>
            </Switch>
        </BrowserRouter>
    )

}

