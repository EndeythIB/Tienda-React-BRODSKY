import React from "react";

//StyleSheet
import "./ItemsModal.css";


export default function ItemsModal(props) {

  return (
    <div className="Modal-Item">
      <p style={{ paddingLeft: "10px", fontWeight: "bold" }}>
        {props.item.title}
      </p>
      <p
        style={{ paddingLeft: "10px", fontWeight: "bold", textAlign: "center" }}
      >
        ${props.item.price}
      </p>
      <p
        style={{ paddingLeft: "10px", fontWeight: "bold", textAlign: "right" }}
      >
        x{props.item.contador}u
      </p>
    </div>
  );
}
