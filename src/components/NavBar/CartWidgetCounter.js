import React, {useContext} from "react";
import {CartContext} from "../../Context/CartContext";

export default function WidgetCount() {
    const {cart, clear, cantidadTotalCarrito} = useContext(CartContext);
    const cartLenght = cart?.length
    

    if (cantidadTotalCarrito() === 0) {
        return(
            <p></p>
        )            
    }else {
        return(
            <div>

                <p style={{color: "red", fontWeight: "bolder"}}>( {cantidadTotalCarrito()} )</p>
        
            </div>
        )

    }

}