import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";

//Components
import ItemsModal from "../ItemsModal/ItemsModal";

//External Components
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import TextField from "@mui/material/TextField";

//firebase
import db from "../../firebase";
import { collection, addDoc } from "firebase/firestore";

export default function ModalCompra(props) {
  const { cart, precioTotalCarrito, notifySucces, notifyError, notifyCopy , clear} =
    useContext(CartContext);
  const history = useHistory()

  const [newPurchase, setNewPurchase] = useState({
    name: "",
    mail: "",
    phone: "",
    items: cart,
    mailConf: "",
    total: "$" + precioTotalCarrito(),
  });

  const { name, mail, phone, mailConf } = newPurchase;

  const eventHandler = (e) => {
    setNewPurchase({
      ...newPurchase,
      [e.target.name]: e.target.value,
    });
  };

  const redirect = () => {
    history.push("/")
  }
  
  const validatePurchase = (purchase) => {
    if (name.trim() === "" || mail.trim() === "" || phone.trim() === "" || mailConf.trim() === "") {
      notifyError("Debes completar todos los campos");
      return;
    }

    if (!mail.includes("@") || !mail.includes(".")) {
      notifyError("Debes introducir un email válido");
      return;
    }

    if (mail !== mailConf) {
      notifyError("Los e-mails deben coincidir.");
      return;
    }
    endPurchase();
  };

  const endPurchase = () => {
    console.log("compra: ", newPurchase);
    pushOrderFirebase(newPurchase);
  };

  // const copyToClipboard = () => {
  //   navigator.clipboard.writeText(order.id);
  //   notifySucces("copiado correctamente");
  // }

  // onClick={() =>  navigator.clipboard.writeText(order.id)}

  const pushOrderFirebase = async (newPurchase) => {
    const purchaseFirebase = collection(db, "Orders");
    const order = await addDoc(purchaseFirebase, newPurchase);
    console.log("se genero order con id: ", order.id);

    const copyToClipboard = () => {
      navigator.clipboard.writeText(order.id);
      notifyCopy();
    }

    notifySucces(<div>Felicidades por tu compra! <br></br> Tu ID de orden es: <br></br> {order.id} <br></br> <br></br> <Button variant="outline-light"
    style={{color: "black", boxShadow: "0px 1px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)"}} onClick={copyToClipboard}>Copiar ID</Button> <br></br> <br></br> Seras redireccionado al inicio en 10 segundos</div>);
    props.setModalShow(false);
    setTimeout( () => {
      clear()
      redirect()
    }, 12000)
    

    
  };

  return (
    <Modal
      scrollable={true}
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
      <Modal.Body>
        <div style={{border: "1px solid rgba(0,0,0,.125)", boxShadow: "0px 1px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)",}}>

          {cart.map((item) => (
            <>
              <div>{<ItemsModal item={item} />}</div>
            </>
          ))}

        </div>

        <br></br>

        <h4 style={{ textAlign: "right" }}>
          Total a pagar: ${precioTotalCarrito()}
        </h4>

        <h4 style={{ textAlign: "center" }}>
          -----------------------------------------------------------------------
        </h4>

        <h5 style={{ textAlign: "center" }}>
          Para finalizar la compra completa los siguientes campos:
        </h5>

        <div>
          <form
            style={{ textAlign: "center", padding: "10px", margin: "10px" }}
          >
            <ul style={{ listStyle: "none", paddingLeft: "0" }}>
              <li>
                <TextField
                  style={{ marginTop: "15px", width: "80%" }}
                  onChange={eventHandler}
                  id="standard-basic"
                  label="Nombre"
                  variant="standard"
                  id="PurchaseName"
                  name="name"
                />
              </li>
              <li>
                <TextField
                  style={{ marginTop: "15px", width: "80%" }}
                  fullWidth
                  onChange={eventHandler}
                  id="standard-basic"
                  label="Email"
                  variant="standard"
                  id="PurchaseEmail"
                  name="mail"
                  type="email"
                />
              </li>
              <li>
                <TextField
                  style={{ marginTop: "15px", width: "80%" }}
                  fullWidth
                  onChange={eventHandler}
                  id="standard-basic"
                  label="Confirma Email"
                  variant="standard"
                  id="PurchaseEmail"
                  name="mailConf"
                  type="email"
                />
              </li>
              <li>
                <TextField
                  style={{ marginTop: "15px", width: "80%" }}
                  fullWidth
                  onChange={eventHandler}
                  id="standard-basic"
                  label="Teléfono"
                  variant="standard"
                  id="PurchasePhone"
                  name="phone"
                  type="phone"
                />
              </li>
            </ul>
          </form>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={validatePurchase}
          variant="outline-light"
          style={{
            color: "black",
            boxShadow:
              "0px 1px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)",
          }}
        >
          Continuar
        </Button>
        <Button
          onClick={props.onHide}
          variant="outline-light"
          style={{
            color: "black",
            boxShadow:
              "0px 1px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)",
          }}
        >
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
