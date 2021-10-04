import React from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useState, useEffect } from "react";
import { DataItem } from "../../ItemData/ItemData";
import { useParams } from "react-router";



export default function ItemDetailContainer() {
    const [itemInfo, setItemInfo] = useState([]);
    const { idItem } = useParams();

    useEffect (() => {


    const getItem = new Promise ((resolve) => {
        setTimeout(() => {
            resolve(DataItem)
        }, 0)
    })

    
    getItem.then((res)=> {
        idItem
            ? setItemInfo(res.filter((i) => i.id === idItem))
            : setItemInfo(res);
    })
    
    }, [idItem])

    console.log(idItem)

    return (
    
        <div className="div-catalog">

        <ItemDetail data={itemInfo}/>    
        </div>
        
    )

}

