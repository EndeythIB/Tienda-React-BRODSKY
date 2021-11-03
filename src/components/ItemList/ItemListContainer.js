import React, { useEffect, useState } from "react";
import { ItemList } from "./ItemList";
import { useParams } from "react-router";

//Firebase
import db from "../../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

export const ItemListContainer = () => {
  const [ItemCollection, setItems] = useState([]);
  const { catId } = useParams();

  async function getItems(db) {
    let itemsCol = catId
      ? query(collection(db, "ItemCollection"), where("category", "==", catId))
      : collection(db, "ItemCollection");
    const itemsSnapshot = await getDocs(itemsCol);
    const listaItem = itemsSnapshot.docs.map((doc) => doc.data());
    return setItems(listaItem);
  }

  useEffect(() => {
    getItems(db);
  }, [catId]);

  return (
    <div id="catalog" className="div-catalog">
      <ItemList ItemCollection={ItemCollection} />
    </div>
  );
};
