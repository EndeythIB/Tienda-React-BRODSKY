import React, { useState, createContext } from "react";

export const CartContext = createContext();

export const CartProvider = (props) => {
  const [cart, setCart] = useState([]);

  console.log("ESTE ES EL CARRITO", cart);

  const addItem = (item, count) => {
    const newItem = { ...item, contador: count };

    if (!isInCart(item)) {
      setCart([...cart, newItem]);
    } else {
      let foundItem = cart.find((el) => el.id === item.id);
      foundItem.contador = foundItem.contador + count;
      setCart([...cart]);
    }
  };

  const isInCart = (item) => {
    return cart && cart.some((element) => element.id === item.id);
  };

  const deleteItem = (id) => {
    //deleteItem(props.data[0])
    //deleteItem(props.data[0].id)
    cart.filter((el) => el.id !== id);
    setCart([...cart]);
  };

  //reduce -->
  //cart.reduce(()=> (a,b,0))

  const precioTotalCarrito = () =>
    cart.reduce(
      (prevValue, currentValue) =>
        prevValue + currentValue.price * currentValue.contador,
      0
    );

  const cantidadTotalCarrito = () =>
    cart.reduce(
      (prevValue, currentValue) => prevValue + currentValue.contador,
      0
    );

  return (
    <CartContext.Provider value={{ cart, setCart, addItem }}>
      {props.children}
    </CartContext.Provider>
  );
};
