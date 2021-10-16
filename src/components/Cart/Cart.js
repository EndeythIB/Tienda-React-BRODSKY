import React, {useContext} from "react";
import CartItem from "../CartItem/CartItem";
import {CartContext} from "../../Context/CartContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";
import EstadoCarrito from "../CartStatus/CartStatus";
import CartStatus from "../CartStatus/CartStatus";
import '../CartStatus/CartStatus.css'

export default function Cart() {
    const {cart, setCart, clear} = useContext(CartContext);
    const cartLenght = cart?.length

    const cartDeployment = () => {
        if (cartLenght === 0) {
            return(
                <div>
                    <p>Carrito vacio</p>
                
                </div>
            )            
        }else {
            return(
                <div className="Cart">

                    <p>Cantidad de items en el carrito: {cart?.length}</p>
                    {console.log(cart)}

                    <div>
                        {cart.map(item => <>
                            <div>
                                {/* {item.title} */}
                                {<CartItem item={item}/>}
                                {/* <ItemCarrito item={item} /> */}
                            </div>
                        </>)}
                    </div>

                            <Button onClick={clear}>Limpiar</Button>
            
                </div>
            )

        }

    }

    return(
        <CartStatus/>
    )
    
}