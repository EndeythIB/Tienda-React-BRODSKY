import React from "react";
import "./Home.css";
import logo from "../../assets/libro.png";
import ScrollWidget from "../ScrollWidget/ScrollWidget";
import { ItemListContainer } from "../ItemList/ItemListContainer";


export default function Home() {
    return(
        <div className="Home">
            <header className="Home-header">
                <img src={logo} className="Home-logo" alt="" />
                <br></br>
                <h1>📖LIBRITOS📖</h1>
                <h5>
                    REVISA NUESTRO <span>CATÁLOGO</span>
                </h5>
                <div className="down-button">
                    <ScrollWidget/>
                </div>
                
            </header>
            <ItemListContainer/>
        </div>  

    )

}