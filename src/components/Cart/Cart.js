import React, {useContext} from "react";
import {CartContext} from "../../Context/CartContext";

export default function Cart() {
    const {cart, setCart} = useContext(CartContext);
    
    return(
        <div className="Cart">

            <p>Cantidad de items en el carrito: {cart?.length}</p>
            {console.log(cart)}

            <div>
            {cart.map(item => <>
            <div>
                {item.title}
                {/* <ItemCarrito item={item} /> */}
            </div>
            </>)}

            </div>


            
        </div>  

    )

}