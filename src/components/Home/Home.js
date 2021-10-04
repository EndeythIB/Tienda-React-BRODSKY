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
                <br></br>
                    REVISA AQUI DEBAJO NUESTRO <span style={{ textDecoration: 'underline'}}>CATÁLOGO COMPLETO</span> 
                </h5>
                <div className="down-button">
                    <ScrollWidget/>
                </div>
                
            </header>
            <ItemListContainer/>
        </div>  

    )

}