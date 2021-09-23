import React from "react"
import Product from "../Product/Products"
import "./ItemListContainer.css"
import sadFace from "../../assets/emptyCatalog.png"



export default function ItemListContainer({greeting}){
    return (
        <div className="container-general">
            <div className="container-greeting">
                <h1>{greeting}</h1>
            </div>
                <Product title="Libro 1" price="3000"/>
                <Product title="Libro 2" price="2700"/>
                <Product title="Libro 3" price="400"/>
                <Product title="Libro 4" price="3800"/>
                <Product title="Libro 5" price="5000"/>
                <Product title="Libro 6" price="6900"/>          
                <Product title="Libro 7" price="7200"/>          
                <Product title="Libro 8" price="7800"/>          
                <Product title="Libro 9" price="8900"/>          
                <Product title="Libro 10" price="6400"/>          
        </div>
    )
}