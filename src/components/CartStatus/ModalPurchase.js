import React from "react";
import {CartContext} from "../../Context/CartContext";
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';

//firebase
import db from '../../firebase';
import { getFirestore, collection, addDoc } from 'firebase/firestore';



export function ModalCompra(props) {
    const {cart, clear, precioTotalCarrito, cantidadTotalCarrito, deleteItem} = useContext(CartContext);

    const BuyRegistration = () => {
        localStorage.setItem("name", input.id.purchase)
    }

    const newPurchase = {
        buyer: {
            name: "",
            email: "",
            phone: "",
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
    }

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Detalle de tu compra:
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            Para finalizar tu compra de 

            {cart.title}

            por ${precioTotalCarrito()}

            Completa los siguientes campos.

            <div>
                <form>
                    <input id="PurchaseName" type="text" placeholder="Nombre"></input>
                    <input id="PurchaseEmail" type="email" placeholder="Email"></input>
                    <input id="PurchasePhone" type="phone" placeholder="Teléfono"></input>
                
                </form>
            </div>
          
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={endPurchase}>Comprar</Button>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  function App() {
    const [modalShow, setModalShow] = React.useState(false);
  
    return (
      <>
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Launch vertically centered modal
        </Button>
  
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
  }