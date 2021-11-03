import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";

//Components
import CartItem from "../CartItem/CartItem";
import ModalCompra from "./ModalPurchase";

//StyleSheet
import "./CartStatus.css";

//External Components
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { ToastContainer } from "react-toastify";



export default function CartStatus() {
  const {
    cart,
    clear,
    precioTotalCarrito,
    cantidadTotalCarrito,
  } = useContext(CartContext);
  const cartLenght = cart?.length;
  const [modalShow, setModalShow] = React.useState(false);

  if (cartLenght === 0) {
    return (
      <div>
        <div className="empty">
          <h2>¡Todavía no agrego nada en su carrito!</h2>
          <br></br>
          <h4>(vaya a inicio para empezar a comprar)</h4>
          <br></br>
          <Link to="/">
            <Button>Ir a COMPRAR</Button>
          </Link>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="CartPurchase">
          <div
            className="Cart-Commands"
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "10px 50px 10px 50px",
            }}
          >
            <p>Total Items: {cantidadTotalCarrito()}</p>
            <p>Precio Total: ${precioTotalCarrito()}</p>
            <Button onClick={clear} variant="outline-light">
              Limpiar carrito
            </Button>
            <Button onClick={() => setModalShow(true)} variant="outline-light">
              Finalizar Compra
            </Button>
          </div>

          <div>
            {cart.map((item) => (
              <>
                <div>
                  {<CartItem item={item} />}
                  <ToastContainer autoClose={3000} />
                  {
                    <ModalCompra
                      item={item}
                      show={modalShow}
                      onHide={() => setModalShow(false)}
                    />
                  }
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
