import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

//StyleSheet
import "./CartItem.css";

//Externar Components
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function CartItem(props) {
  const { deleteItem } = useContext(CartContext);

  return (
    <div className="cart-item" style={{}}>
      <Card className="cart-card">
        <Card.Img className="card-img" variant="" src={props.item.img} />
        <Card.Body>
          <Card.Title>{props.item.title}</Card.Title>
          <Card.Text
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              paddingTop: "20px",
            }}
          >
            <div>precio: ${props.item.price} c/u</div>
            <div>cantidad: {props.item.contador}</div>
            <div>total: ${props.item.contador * props.item.price}</div>
          </Card.Text>
        </Card.Body>
        <Card.Body>
          <Button
            className="trashBTN"
            onClick={() => deleteItem(props.item.id)}
            style={{ marginTop: "30px" }}
            variant="outline-light"
          >
            🗑️
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
