import React, { useEffect, useState } from 'react';
import { ItemList } from './ItemList';

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    
    
    const list = [
                    {
                        id: 1,
                        title: "Harry Potter 9",
                        description: "Harry pelea con Wolverine por una milanesa",
                        price: 2300,
                        img: "https://64.media.tumblr.com/acf22444f0b841196308dfb92b2a94de/tumblr_inline_nwsnyfZ8Tc1sg101c_400.jpg"    
                    },
                    {
                        id: 2,
                        title: "Logan 7",
                        description: "Logan sufre",
                        price: 5400,
                        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHCJLOsk9O8NtnSkDgXSQMhLIRkcS7cLJiX9CH6bLGkbzo83h2PuXdT1hAXUVXH6qJMEA&usqp=CAU"    
                    },
                    {
                        id: 3,
                        title: "Libro3",
                        description: "Libro Nro 3",
                        price: 4300,
                        img: "https://i.pinimg.com/originals/ea/1d/28/ea1d28663072613b9da4d17d3e4c925a.jpg"    
                    },
                    {
                        id: 4,
                        title: "Libro4",
                        description: "Libro Nro 4",
                        price: 6800,
                        img: "https://i.pinimg.com/originals/ea/1d/28/ea1d28663072613b9da4d17d3e4c925a.jpg"    
                    }
                ];

    const getItems = new Promise((resolve) => {
      setTimeout(() => {
        resolve(list);
      }, 2000);
    });


    getItems.then((res) => {
      setItems(res);
    });
  }, []);

  return <ItemList items={items} />;
};