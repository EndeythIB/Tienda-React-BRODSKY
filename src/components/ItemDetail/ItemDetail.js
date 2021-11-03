import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";

//Components
import ItemCount from "../ItemCount/ItemCount";

//StyleSheet
import "./ItemDetail.css";

//External Components
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { ToastContainer } from "react-toastify";

export default function ItemDetail(props) {
  const [counter, setCounter] = useState(0);
  const stock = props.data[0]?.stock;
  const [show, setShow] = useState(true);
  const [showCart, setShowCart] = useState(false);
  const { addItem, notifyError } = useContext(CartContext);

  const addOne = () => {
    counter < stock && setCounter(counter + 1);
  };

  const removeOne = () => {
    counter !== 0 && setCounter(counter - 1);
  };

  const addCarrito = () => {
    if (counter >= 1) {
      setShow(false);
      setShowCart(true);
      const itemCarrito = props.data[0];

      addItem(itemCarrito, counter);
    } else {
      notifyError("debes agregar al menos un item!");
    }
  };

  return (
    <>
      <div className="detail-wrapper">
        <div className="detail-img">
          <img alt="" src={props.data[0]?.img}></img>
          <img alt="" src={props.data[0]?.img}></img>
          <img alt="" src={props.data[0]?.img}></img>
        </div>
        <div className="detail-description">
          <h2>{props.data[0]?.title}</h2>
          <p>{props.data[0]?.description}</p>
          <p>{"$" + props.data[0]?.price}</p>
          {show ? (
            <div className="contador">
              {
                <ItemCount
                  addOne={addOne}
                  removeOne={removeOne}
                  counter={counter}
                  stock={stock}
                />
              }
            </div>
          ) : null}
          <br></br>

          {show ? (
            <div className="d-grid gap-2">
              <Button onClick={addCarrito} variant="outline-danger">
                Agregar al carrito
              </Button>
              <ToastContainer autoClose={2000} />
            </div>
          ) : null}
          {showCart ? (
            <div className="d-grid gap-2">
              <p style={{ color: "red" }}>
                Gracias por su compra, vuelvas prontos!
              </p>
            </div>
          ) : null}
          {showCart ? (
            <div
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}
              className="d-grid gap-2"
            >
              <Link to="/">
                <Button variant="outline-danger">Volver a Inicio</Button>
              </Link>
              <Link to="/cart">
                <Button variant="outline-danger">Ir al Carrito 🛒</Button>
              </Link>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}
