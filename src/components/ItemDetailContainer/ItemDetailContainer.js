import React from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useState, useEffect } from "react";



export default function ItemDetailContainer() {
    const [itemInfo, setItemInfo] = useState([]);

    useEffect (() => {

    const detailItem = [
        {
            id: 1,
            title: "Harry Potter 9",
            description: "Harry pelea con Wolverine por una milanesa",
            price: 2300,
            img: "https://img.huffingtonpost.com/asset/55bb82dd1400002f002e18bc.jpeg?cache=zflffcpwry&ops=crop_0_27_2121_1377,scalefit_630_noupscale"    
        },
        {
            id: 2,
            title: "Logan 7",
            description: "Logan sufre porque perdió la batalla definitiva con Mirtha",
            price: 5400,
            img: "https://i.pinimg.com/originals/a7/37/df/a737dfaf12129b5dfe3d455dc0258cf2.jpg"    
        },
        {
            id: 3,
            title: "Como no morí",
            description: "Horrocruxes, un pasatiempo",
            price: 4300,
            img: "https://i2.wp.com/hipertextual.com/wp-content/uploads/2020/03/hipertextual-2020604748.jpg?fit=1200%2C800&ssl=1"    
        },
        {
            id: 4,
            title: "Fusión",
            description: "En ese momento Cell, sintio el verdadero temor",
            price: 6800,
            img: "https://i1.wp.com/culturageek.com.ar/wp-content/uploads/2019/02/Wolverine-Daniel-Radcliffe-1-e1549907055722.png?fit=667%2C390"    
        },
        {
          id: 5,
          title: "Harry Potter 9",
          description: "Harry pelea con Wolverine por una milanesa",
          price: 2300,
          img: "https://img.huffingtonpost.com/asset/55bb82dd1400002f002e18bc.jpeg?cache=zflffcpwry&ops=crop_0_27_2121_1377,scalefit_630_noupscale"    
        },
        {
            id: 6,
            title: "Logan 7",
            description: "Logan sufre porque perdió la batalla definitiva con Mirtha",
            price: 5400,
            img: "https://i.pinimg.com/originals/a7/37/df/a737dfaf12129b5dfe3d455dc0258cf2.jpg"    
        },
        {
            id: 7,
            title: "Como no morí",
            description: "Horrocruxes, un pasatiempo",
            price: 4300,
            img: "https://i2.wp.com/hipertextual.com/wp-content/uploads/2020/03/hipertextual-2020604748.jpg?fit=1200%2C800&ssl=1"    
        },
        {
            id: 8,
            title: "Fusión",
            description: "En ese momento Cell, sintio el verdadero temor",
            price: 6800,
            img: "https://i1.wp.com/culturageek.com.ar/wp-content/uploads/2019/02/Wolverine-Daniel-Radcliffe-1-e1549907055722.png?fit=667%2C390"    
        },
      {
        id: 9,
        title: "Harry Potter 9",
        description: "Harry pelea con Wolverine por una milanesa",
        price: 2300,
        img: "https://img.huffingtonpost.com/asset/55bb82dd1400002f002e18bc.jpeg?cache=zflffcpwry&ops=crop_0_27_2121_1377,scalefit_630_noupscale"    
    },
    {
        id: 10,
        title: "Logan 7",
        description: "Logan sufre porque perdió la batalla definitiva con Mirtha",
        price: 5400,
        img: "https://i.pinimg.com/originals/a7/37/df/a737dfaf12129b5dfe3d455dc0258cf2.jpg"    
    },
    {
        id: 11,
        title: "Como no morí",
        description: "Horrocruxes, un pasatiempo",
        price: 4300,
        img: "https://i2.wp.com/hipertextual.com/wp-content/uploads/2020/03/hipertextual-2020604748.jpg?fit=1200%2C800&ssl=1"    
    },
    {
        id: 12,
        title: "Fusión",
        description: "En ese momento Cell, sintio el verdadero temor",
        price: 6800,
        img: "https://i1.wp.com/culturageek.com.ar/wp-content/uploads/2019/02/Wolverine-Daniel-Radcliffe-1-e1549907055722.png?fit=667%2C390"    
    },              
    ]

    const getItem = new Promise ((resolve) => {
        setTimeout(() => {
            resolve(detailItem)
        })
    })

    
    getItem.then((response)=> {
        setItemInfo(response)
    })
    
    }, [])

    return (
    
        <div className="div-catalog">
        <ItemDetail data={itemInfo}/>    
        </div>
        
    )

}

