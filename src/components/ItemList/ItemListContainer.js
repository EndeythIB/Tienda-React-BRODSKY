import React, { useEffect, useState } from 'react';
import { ItemList } from './ItemList';
import { DataItem } from '../../ItemData/ItemData';
import { useParams } from 'react-router';


export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { catId } = useParams();

  useEffect(() => {
    
    
    // const list = [
    //                 {
    //                     id: 1,
    //                     title: "Harry Potter 9",
    //                     description: "Harry pelea con Wolverine por una milanesa",
    //                     price: 2300,
    //                     img: "https://img.huffingtonpost.com/asset/55bb82dd1400002f002e18bc.jpeg?cache=zflffcpwry&ops=crop_0_27_2121_1377,scalefit_630_noupscale"    
    //                 },
    //                 {
    //                     id: 2,
    //                     title: "Logan 7",
    //                     description: "Logan sufre porque perdió la batalla definitiva con Mirtha",
    //                     price: 5400,
    //                     img: "https://i.pinimg.com/originals/a7/37/df/a737dfaf12129b5dfe3d455dc0258cf2.jpg"    
    //                 },
    //                 {
    //                     id: 3,
    //                     title: "Como no morí",
    //                     description: "Horrocruxes, un pasatiempo",
    //                     price: 4300,
    //                     img: "https://i2.wp.com/hipertextual.com/wp-content/uploads/2020/03/hipertextual-2020604748.jpg?fit=1200%2C800&ssl=1"    
    //                 },
    //                 {
    //                     id: 4,
    //                     title: "Fusión",
    //                     description: "En ese momento Cell, sintio el verdadero temor",
    //                     price: 6800,
    //                     img: "https://i1.wp.com/culturageek.com.ar/wp-content/uploads/2019/02/Wolverine-Daniel-Radcliffe-1-e1549907055722.png?fit=667%2C390"    
    //                 },
    //                 {
    //                   id: 5,
    //                   title: "Harry Potter 9",
    //                   description: "Harry pelea con Wolverine por una milanesa",
    //                   price: 2300,
    //                   img: "https://img.huffingtonpost.com/asset/55bb82dd1400002f002e18bc.jpeg?cache=zflffcpwry&ops=crop_0_27_2121_1377,scalefit_630_noupscale"    
    //               },
    //               {
    //                   id: 6,
    //                   title: "Logan 7",
    //                   description: "Logan sufre porque perdió la batalla definitiva con Mirtha",
    //                   price: 5400,
    //                   img: "https://i.pinimg.com/originals/a7/37/df/a737dfaf12129b5dfe3d455dc0258cf2.jpg"    
    //               },
    //               {
    //                   id: 7,
    //                   title: "Como no morí",
    //                   description: "Horrocruxes, un pasatiempo",
    //                   price: 4300,
    //                   img: "https://i2.wp.com/hipertextual.com/wp-content/uploads/2020/03/hipertextual-2020604748.jpg?fit=1200%2C800&ssl=1"    
    //               },
    //               {
    //                   id: 8,
    //                   title: "Fusión",
    //                   description: "En ese momento Cell, sintio el verdadero temor",
    //                   price: 6800,
    //                   img: "https://i1.wp.com/culturageek.com.ar/wp-content/uploads/2019/02/Wolverine-Daniel-Radcliffe-1-e1549907055722.png?fit=667%2C390"    
    //               },
    //               {
    //                 id: 9,
    //                 title: "Harry Potter 9",
    //                 description: "Harry pelea con Wolverine por una milanesa",
    //                 price: 2300,
    //                 img: "https://img.huffingtonpost.com/asset/55bb82dd1400002f002e18bc.jpeg?cache=zflffcpwry&ops=crop_0_27_2121_1377,scalefit_630_noupscale"    
    //             },
    //             {
    //                 id: 10,
    //                 title: "Logan 7",
    //                 description: "Logan sufre porque perdió la batalla definitiva con Mirtha",
    //                 price: 5400,
    //                 img: "https://i.pinimg.com/originals/a7/37/df/a737dfaf12129b5dfe3d455dc0258cf2.jpg"    
    //             },
    //             {
    //                 id: 11,
    //                 title: "Como no morí",
    //                 description: "Horrocruxes, un pasatiempo",
    //                 price: 4300,
    //                 img: "https://i2.wp.com/hipertextual.com/wp-content/uploads/2020/03/hipertextual-2020604748.jpg?fit=1200%2C800&ssl=1"    
    //             },
    //             {
    //                 id: 12,
    //                 title: "Fusión",
    //                 description: "En ese momento Cell, sintio el verdadero temor",
    //                 price: 6800,
    //                 img: "https://i1.wp.com/culturageek.com.ar/wp-content/uploads/2019/02/Wolverine-Daniel-Radcliffe-1-e1549907055722.png?fit=667%2C390"    
    //             },
    //               ];

    const getItems = new Promise((resolve) => {
      setTimeout(() => {
        resolve(DataItem);
      }, 0);
    });


    getItems.then((res) => {
      catId 
        ? setItems(res.filter((i) => i.category === catId))
        : setItems(res);
    });
  }, [catId]);

  const categories = [
    { id: 'asfadd', address: '/', text: 'TODOS LOS PRODUCTOS' },
    { id: '123asf', address: '/category/terror', text: 'CATEGORIA A' },
    { id: 'sgs3q3', address: '/category/comedia', text: 'CATEGORIA B' },
    { id: 'gkl98s', address: '/category/drama', text: 'CATEGORIA C' },
    { id: 'dwa648', address: '/category/suspenso', text: 'CATEGORIA D' },
  ];

  return (
        <div id="catalog" className="div-catalog">
          <ItemList items={items} />
        </div>       
  ) 
};