import React from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useState, useEffect } from "react";
import Spinner from 'react-bootstrap/Spinner'
import 'bootstrap/dist/css/bootstrap.min.css';
import { DataItem } from "../../ItemData/ItemData";
import { useParams } from "react-router";
import db from '../../firebase';
import { getFirestore, collection, getDocs, doc, query, where } from 'firebase/firestore';



export default function ItemDetailContainer() {
    const [itemInfo, setItemInfo] = useState([]);
    const { idItem } = useParams();
    const [loader, setLoader] = useState(true);

    async function getItemsInfo(db) {
        setLoader(true);
        let itemsInfoCol = idItem
         ? query(
              collection(db, "ItemCollection"),
              where("id", "==", Number(idItem))
           )
         : collection(db, "ItemCollection");
      const itemsInfoSnapshot = await getDocs(itemsInfoCol);
      const listaInfoItem = itemsInfoSnapshot.docs.map(doc => doc.data());
      setLoader(false);
      return setItemInfo(listaInfoItem)

    }

      useEffect(()=>{
        
        getItemsInfo(db)
        
      },[idItem])

    return (
        <>
        
        {loader ? (
            <div className="SpinnerCont" style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
                <Spinner className="spinDetail" animation="border" role="status" variant="info"/>
            </div>
            
        ) : (
            <div className="div-catalog">

                <ItemDetail data={itemInfo}/>

            </div>
        )}
        </>

        
        
    )

}

