import React, {useContext} from "react";
import { Link } from "react-router-dom";
import {CartContext} from "../../Context/CartContext";
import CartItem from "../CartItem/CartItem";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";
import { ToastContainer, toast } from "react-toastify";
import './CartStatus.css'

//firebase
import db from '../../firebase';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

export default function CartStatus() {
    const {cart, clear, precioTotalCarrito, cantidadTotalCarrito, deleteItem, notifySucces} = useContext(CartContext);
    const cartLenght = cart?.length

    const newPurchase = {
        buyer: {
            name: "Isaac",
            email: "isaac@i.com",
            phone: "123456789",
        },
        items : cart,
        total : ("$" + precioTotalCarrito())
    }

    const endPurchase = () => {
        console.log("compra: ", newPurchase)
        pushOrderFirebase(newPurchase)
        

    }

    const pushOrderFirebase = async (newPurchase) => {
        const purchaseFirebase = collection(db, 'Orders');
        const order = await addDoc(purchaseFirebase, newPurchase);
        console.log("se genero order con id: ", order.id)
        notifySucces('Felicidades por tu compra! tu ID de orden es: ' + order.id);
    }
    

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
                        <p>Precio Total: ${precioTotalCarrito()}</p>           
                        <Button onClick={clear} variant="outline-light" >Limpiar carrito</Button>
                        <Button onClick={endPurchase} variant="outline-light" >Finalizar Compra</Button>
                    </div>

                    <div>
                        {cart.map(item => <>
                            <div>
                                {<CartItem item={item}/>}
                                <ToastContainer autoClose={3000} />
                            </div>
                        </>)}
                    </div>
                    
                </div>



        
            </div>
        )

    }

}