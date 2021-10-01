import React from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useState, useEffect } from "react";



export default function ItemDetailContainer() {
    const [itemInfo, setItemInfo] = useState([]);

    useEffect (() => {

    const detailItem = [
        {
            id: 2,
            title: "Logan 7",
            description: "Logan sufre porque perdió la batalla definitiva con Mirtha",
            price: 5400,
            img: "https://i.pinimg.com/originals/a7/37/df/a737dfaf12129b5dfe3d455dc0258cf2.jpg"    
        }              
    ]

    const getItem = new Promise ((resolve) => {
        setTimeout(() => {
            resolve(detailItem)
        }, 2000)
    })

    
    getItem.then((response)=> {
        setItemInfo(response)
    })
    
    }, [])

    return (
    
        <div className="items">
        <ItemDetail data={itemInfo}/>    
        </div>
        
    )

}

