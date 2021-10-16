import React, { useState, useContext } from "react";
import {CartContext} from "../../Context/CartContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Button from "react-bootstrap/Button";
import './CartItem.css';


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
                    <Button onClick={() => deleteItem(props.item.id)} style={{marginTop: "30px"}} variant="primary">X</Button>
                </Card.Body>
            </Card>

            {/* <img src={props.item.img}></img>
            <p>{props.item.price}</p>
            <h3>{props.item.title}</h3> */}




            {/* <div>
                {cart.map(item => <>
                <div>
                    {item.title}
                    <CartItem/>
                    {/* <ItemCarrito item={item} /> */}
                {/* </div>
                </>)}
            </div> */}


            {/* <div className="detail-wrapper">
                <div className="detail-img">
                    <img src={props.data[0]?.img}></img>
                    <img src={props.data[0]?.img}></img>
                    <img src={props.data[0]?.img}></img>
                </div>
                <div className="detail-description">
                    <h2>{props.data[0]?.title}</h2>
                    <p>{props.data[0]?.description}</p>
                    <p>{"$" + props.data[0]?.price}</p>
                    {show?<div className="contador">{<ItemCount/>}</div>:null}                
                    <br></br>

                    {show?<div className="d-grid gap-2">
                        <Button onClick={addCarrito} variant="outline-danger">Agregar al carrito</Button>
                    </div>:null}
                    {showCart?<div className="d-grid gap-2">
                        <p style={{ color: "red" }}>Gracias por su compra, vuelvas prontos!</p>
                    </div>:null}
                    {showCart?<div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }} className="d-grid gap-2">
                        <Link to="/"><Button variant="outline-danger">Volver a Inicio</Button></Link>
                        <Link to="/cart"><Button variant="outline-danger">Ir al Carrito 🛒</Button></Link>
                    </div>:null}
                </div>
            </div> */}
        </div>
    )
}