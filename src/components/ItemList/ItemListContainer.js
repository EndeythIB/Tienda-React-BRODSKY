import React, { useEffect, useState } from 'react';
import { ItemList } from './ItemList';
import { DataItem } from '../../ItemData/ItemData';
import { useParams } from 'react-router';
import db from '../../firebase';
import { getFirestore, collection, getDocs, doc, query, where } from 'firebase/firestore';



export const ItemListContainer = () => {
  const [ItemCollection, setItems] = useState([]);
  const { catId } = useParams();

    async function getItems(db) {
      let itemsCol = catId
         ? query(
              collection(db, "ItemCollection"),
              where("category", "==", catId)
           )
         : collection(db, "ItemCollection");
      const itemsSnapshot = await getDocs(itemsCol);
      console.log("itemSnapshot: ", itemsSnapshot);
      const listaItem = itemsSnapshot.docs.map(doc => doc.data());
      console.log("lista items: ", listaItem)
      return setItems(listaItem)
      
      

  }

  

  useEffect(()=>{
    getItems(db)
  },[catId])

  // const categories = [
  //   { id: 'asfadd', address: '/', text: 'TODOS LOS PRODUCTOS' },
  //   { id: '123asf', address: '/category/terror', text: 'CATEGORIA A' },
  //   { id: 'sgs3q3', address: '/category/comedia', text: 'CATEGORIA B' },
  //   { id: 'gkl98s', address: '/category/drama', text: 'CATEGORIA C' },
  //   { id: 'dwa648', address: '/category/suspenso', text: 'CATEGORIA D' },
  // ];


  // 

  return (
        <div id="catalog" className="div-catalog">
          <ItemList ItemCollection={ItemCollection} />
        </div>       
  ) 
};


 // useEffect(() => {

  //   const getItems = new Promise((resolve) => {
  //     setTimeout(() => {
  //       resolve(DataItem);
  //     }, 0);
  //   });


  //   getItems.then((res) => {
  //     catId 
  //       ? setItems(res.filter((i) => i.category === catId))
  //       : setItems(res);
  //   });  
  // }, [catId]);

  // async function getItems(db) {
  //   const itemsCol = collection(db, 'items');
  //   const itemsSnapshot = await getDocs(itemsCol);
  //   const itemsList = itemsSnapshot.docs.map(doc => doc.data());
  //   console.log("lista items: ", itemsList)
  //   setItems(itemsList)
  //   return itemsList;

  