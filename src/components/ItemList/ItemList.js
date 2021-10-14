import React from 'react';
import { Item } from './Item';

export const ItemList = ({ items }) => {
  return (
    <div className="items">
      {items.map((item) => (
        <Item key={item.id} className="item" item={item}/>
      ))}
    </div>
  );
};
