import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ItemCount from "../ItemCount/ItemCount";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Item.css';


export const Item = ({item}) => {
    return(

        <Card style={{ width: '18rem' }}>
        <Card.Img className="card-img" variant="top" src={item.img} />
        <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            {/* <Card.Text>{item.description}</Card.Text> */}
            <Card.Text>{item.price}</Card.Text>
            {/* <ItemCount stock={10} initial={1} /> */}
            <br></br>
            <Button>Agregar al carrito</Button>

        </Card.Body>
        </Card>

    )};
