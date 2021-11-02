import React, {useContext} from "react";
import {CartContext} from "../../Context/CartContext";
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";
import ItemsModal from "../ItemsModal/ItemsModal";
import { ToastContainer, toast } from "react-toastify";

//firebase
import db from '../../firebase';
import { getFirestore, collection, addDoc } from 'firebase/firestore';



export default function ModalCompra(props) {
    const {cart, precioTotalCarrito, notifySucces} = useContext(CartContext);

    // const BuyRegistration = () => {
    //     localStorage.setItem("name", input.id.purchase)
    // }

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
        notifySucces('Felicidades por tu compra! tu ID de orden es: ' + order.id);
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
            Resumen de compra:
          </Modal.Title>
        </Modal.Header>
        <Modal.Body >
            <div style={{border: "1px solid rgba(0,0,0,.125)", boxShadow: "0px 1px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)"}}>
              {cart.map(item => <>
                  <div>
                      {<ItemsModal item={item}/>}
                  </div>
              </>)}
            </div>

            <br></br>

            <h4 style={{textAlign: "right"}}>Total a pagar: ${precioTotalCarrito()}</h4>

            <h4 style={{textAlign: "center"}}>-----------------------------------------------------------------------</h4>            

            <h5 style={{textAlign: "center"}}>Para finalizar la compra completa los siguientes campos:</h5>

            <div>
                <form style={{textAlign: "center"}}>
                  <ul style={{listStyle: "none"}}>
                    <li><input style={{marginTop: "10px", width: "50%"}} id="PurchaseName" type="text" placeholder="Nombre"></input></li>
                    <li><input style={{marginTop: "10px", width: "50%"}} id="PurchaseEmail" type="email" placeholder="Email"></input></li>
                    <li><input style={{marginTop: "10px", width: "50%"}} id="PurchasePhone" type="phone" placeholder="Teléfono"></input></li>
                  </ul>
                
                </form>
            </div>
          
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={endPurchase} variant="outline-light" style={{color: "black", boxShadow: "0px 1px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)"}}>Continuar</Button>
          <Button onClick={props.onHide} variant="outline-light" style={{color: "black", boxShadow: "0px 1px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)"}}>Cerrar</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  // function App() {
  //   const [modalShow, setModalShow] = React.useState(false);
  
  //   return (
  //     <>
  //       <Button variant="primary" onClick={() => setModalShow(true)}>
  //         Launch vertically centered modal
  //       </Button>
  
  //       <MyVerticallyCenteredModal
  //         show={modalShow}
  //         onHide={() => setModalShow(false)}
  //       />
  //     </>
  //   );
  // }