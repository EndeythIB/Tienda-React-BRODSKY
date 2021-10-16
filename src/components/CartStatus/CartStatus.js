import React, {useContext} from "react";
import {CartContext} from "../../Context/CartContext";
import CartItem from "../CartItem/CartItem";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";
import './CartStatus.css'
import { faAlignJustify } from "@fortawesome/free-solid-svg-icons";

export default function CartStatus() {
    const {cart, clear, precioTotalCarrito, cantidadTotalCarrito} = useContext(CartContext);
    const cartLenght = cart?.length
    

    if (cartLenght === 0) {
        return(
            <div>
                <p>Carrito vacio</p>
                {precioTotalCarrito()}
            </div>
        )            
    }else {
        return(
            <div>

                <div className="CartPurchase">
                    <div className="Cart-Commands" style={{display:"flex", justifyContent:"space-between", padding:"10px 50px 10px 50px" }}>
                        <p>Total Items: {cantidadTotalCarrito()}</p>
                        <p>Precio Total: {precioTotalCarrito()}</p>           
                        <Button onClick={clear}>Limpiar carrito</Button>
                        <Button>Finalizar Compra</Button>
                    </div>

                    <div>
                        {cart.map(item => <>
                            <div>
                                {/* {item.title} */}
                                {<CartItem item={item}/>}
                                {/* <ItemCarrito item={item} /> */}
                            </div>
                        </>)}
                    </div>
                    
                </div>

        
            </div>
        )

    }

}