import React, { useState, useContext } from "react";
import {CartContext} from "../../Context/CartContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Button from "react-bootstrap/Button";
import './CartItem.css';
import { ToastContainer, toast } from "react-toastify";


export default function CartItem(props) {
    const {setCart, deleteItem} = useContext(CartContext);


    return(
        <div className="cart-item" style={{}}>
            <Card className="cart-card">
                <Card.Header className="card-header"><img src={props.item.img} alt=""></img></Card.Header>
                <Card.Body>
                    <Card.Title>{props.item.title}</Card.Title>
                    <Card.Text style={{display:"grid", gridTemplateColumns:"1fr 1fr 1fr", paddingTop: "20px"}}>
                        <div>precio: ${props.item.price} c/u</div>
                        <div>cantidad: {props.item.contador}</div>
                        <div>total: ${(props.item.contador * props.item.price)}</div>
                    </Card.Text>
                </Card.Body>
                <Card.Body>
                    <Button className="trashBTN" onClick={() => deleteItem(props.item.id)} style={{marginTop: "30px"}} variant="outline-light">🗑️</Button>
                    <ToastContainer autoClose={2000}/>
                </Card.Body>
            </Card>
        </div>
    )
}