import React from "react";

//Components
import { Item } from "./Item";

export const ItemList = ({ ItemCollection }) => {
  return (
    <div className="items">
      {ItemCollection.map((item) => (
        <Item key={item.id} className="item" item={item} />
      ))}
    </div>
  );
};
