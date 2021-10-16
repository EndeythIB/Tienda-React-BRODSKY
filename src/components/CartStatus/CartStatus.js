import React, {useContext} from "react";
import { Link } from "react-router-dom";
import {CartContext} from "../../Context/CartContext";
import CartItem from "../CartItem/CartItem";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";
import './CartStatus.css'

export default function CartStatus() {
    const {cart, clear, precioTotalCarrito, cantidadTotalCarrito, deleteItem} = useContext(CartContext);
    const cartLenght = cart?.length
    

    if (cartLenght === 0) {
        return(
            <div>
                <div className="empty">
                    <h2>¡Todavía no agrego nada en su carrito!</h2>
                    <br></br>
                    <h4>(vaya a inicio para empezar a comprar)</h4>
                    <br></br>
                    <Link to="/"><Button>Ir a COMPRAR</Button></Link>

                </div>
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