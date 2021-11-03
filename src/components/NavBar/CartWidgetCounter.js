import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

export default function WidgetCount() {
  const { cantidadTotalCarrito } = useContext(CartContext);

  if (cantidadTotalCarrito() === 0) {
    return <p></p>;
  } else {
    return (
      <div>
        <p style={{ color: "red", fontWeight: "bolder", margin: "0" }}>
          ( {cantidadTotalCarrito()} )
        </p>
      </div>
    );
  }
}
