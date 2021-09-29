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
                        img: "https://lh3.googleusercontent.com/proxy/XDp-93kIC9wkvQUv4kpWqjUPisEJZVY-hB02GhmFQqzVmV2x5MDj916bplINNeBunPd735PfFU5oBcs96r8w0AMgbCrTyx2xDvkdVDIDBIruf2uB"    
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
                        title: "Mirtha Legrand: cómo no morí",
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
                    // {
                    //     id: 5,
                    //     title: "Harry Potter 9",
                    //     description: "Harry pelea con Wolverine por una milanesa",
                    //     price: 2300,
                    //     img: "https://lh3.googleusercontent.com/proxy/XDp-93kIC9wkvQUv4kpWqjUPisEJZVY-hB02GhmFQqzVmV2x5MDj916bplINNeBunPd735PfFU5oBcs96r8w0AMgbCrTyx2xDvkdVDIDBIruf2uB"    
                    // },
                    // {
                    //     id: 6,
                    //     title: "Logan 7",
                    //     description: "Logan sufre",
                    //     price: 5400,
                    //     img: "https://i.pinimg.com/originals/a7/37/df/a737dfaf12129b5dfe3d455dc0258cf2.jpg"    
                    // },
                    // {
                    //     id: 7,
                    //     title: "Mirtha Legrand: cómo no morí",
                    //     description: "Horrocruxes, un pasatiempo",
                    //     price: 4300,
                    //     img: "https://i2.wp.com/hipertextual.com/wp-content/uploads/2020/03/hipertextual-2020604748.jpg?fit=1200%2C800&ssl=1"    
                    // },
                    // {
                    //     id: 8,
                    //     title: "Fusión",
                    //     description: "En ese momento Cell, sintio el verdadero temor",
                    //     price: 6800,
                    //     img: "https://i1.wp.com/culturageek.com.ar/wp-content/uploads/2019/02/Wolverine-Daniel-Radcliffe-1-e1549907055722.png?fit=667%2C390"    
                    // }
                  ];

    const getItems = new Promise((resolve) => {
      setTimeout(() => {
        resolve(list);
      }, 0);
    });


    getItems.then((res) => {
      setItems(res);
    });
  }, []);

  return <ItemList items={items} />;
};