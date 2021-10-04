import React, { useEffect, useState } from 'react';
import { ItemList } from './ItemList';
import { DataItem } from '../../ItemData/ItemData';
import { useParams } from 'react-router';


export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { catId } = useParams();

  useEffect(() => {

    const getItems = new Promise((resolve) => {
      setTimeout(() => {
        resolve(DataItem);
      }, 0);
    });


    getItems.then((res) => {
      catId 
        ? setItems(res.filter((i) => i.category === catId))
        : setItems(res);
    });
  }, [catId]);

  console.log(catId)

  const categories = [
    { id: 'asfadd', address: '/', text: 'TODOS LOS PRODUCTOS' },
    { id: '123asf', address: '/category/terror', text: 'CATEGORIA A' },
    { id: 'sgs3q3', address: '/category/comedia', text: 'CATEGORIA B' },
    { id: 'gkl98s', address: '/category/drama', text: 'CATEGORIA C' },
    { id: 'dwa648', address: '/category/suspenso', text: 'CATEGORIA D' },
  ];

  return (
        <div id="catalog" className="div-catalog">
          <ItemList items={items} />
        </div>       
  ) 
};