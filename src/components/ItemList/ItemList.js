import React from 'react';
import { Item } from './Item';

export const ItemList = ({ items }) => {
  return (
    <div className="items">
      {items.map((item) => (
        <Item key={item.id} class="item" item={item}/>
      ))}
    </div>
  );
};
