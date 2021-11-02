import React, { useState, useContext } from "react";
import {CartContext} from "../../Context/CartContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import './ItemsModal.css';



export default function ItemsModal(props) {
    const {setCart, deleteItem} = useContext(CartContext);


    return(

        <div className= "Modal-Item">
            <p style={{paddingLeft: "10px", fontWeight: "bold"}}>{props.item.title}</p>
            <p style={{paddingLeft: "10px", fontWeight: "bold", textAlign: "center"}}>${props.item.price}</p>
            <p style={{paddingLeft: "10px", fontWeight: "bold", textAlign: "right"}}>x{props.item.contador}u</p>
        </div>


    )
}