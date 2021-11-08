import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

//Components
import ItemDetail from "../ItemDetail/ItemDetail";

//External Components
import "bootstrap/dist/css/bootstrap.min.css";
import Spinner from "react-bootstrap/Spinner";

//Firebase
import { collection, getDocs, query, where } from "firebase/firestore";
import db from "../../firebase";

export default function ItemDetailContainer() {
  const [itemInfo, setItemInfo] = useState([]);
  const { idItem } = useParams();
  const [loader, setLoader] = useState(true);  

  useEffect(() => {
    async function getItemsInfo(db) {
       setLoader(true);
       let itemsInfoCol = idItem
          ? query(
               collection(db, "ItemCollection"),
               where("id", "==", Number(idItem))
            )
          : collection(db, "ItemCollection");
       const itemsInfoSnapshot = await getDocs(itemsInfoCol);
       const listaInfoItem = itemsInfoSnapshot.docs.map((doc) => doc.data());
       setLoader(false);
       return setItemInfo(listaInfoItem);
    }
    getItemsInfo(db);
 }, [idItem]);

  return (
    <>
      {loader ? (
        <div
          className="SpinnerCont"
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Spinner
            className="spinDetail"
            animation="border"
            role="status"
            variant="info"
          />
        </div>
      ) : (
        <div className="div-catalog">
          <ItemDetail data={itemInfo} />
        </div>
      )}
    </>
  );
}
