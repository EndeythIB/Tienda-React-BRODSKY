import React from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useState, useEffect } from "react";
import Spinner from 'react-bootstrap/Spinner'
import 'bootstrap/dist/css/bootstrap.min.css';
import { DataItem } from "../../ItemData/ItemData";
import { useParams } from "react-router";



export default function ItemDetailContainer() {
    const [itemInfo, setItemInfo] = useState([]);
    const { idItem } = useParams();
    const [loader, setLoader] = useState(true);

    useEffect (() => {

    setLoader(true);
    const getItem = new Promise ((resolve) => {
        setTimeout(() => {
            resolve(DataItem)
        }, 2000)
    })

    
    getItem.then((res)=> {
        idItem
            ? setItemInfo(res.filter((i) => i.id === idItem))
            : setItemInfo(res);
    })
    .finally(() => setLoader(false));
    
    }, [idItem])

    console.log(idItem)

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

