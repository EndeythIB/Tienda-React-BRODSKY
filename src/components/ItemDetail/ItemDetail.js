import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ItemCount from "../ItemCount/ItemCount";
import 'bootstrap/dist/css/bootstrap.min.css';
import './ItemDetail.css';

export default function ItemDetail(props) {
    return (
        <>
            {console.log("detalle producto:", props.data)}
            <Card style={{ width: '18rem' }}>
            <Card.Img className="card-img" variant="top" src={props.data.img} />
            <Card.Body>
                <Card.Title>{props.data.title}</Card.Title>
                <Card.Text>{props.data.description}</Card.Text>
                <Card.Text>{props.data.price}</Card.Text>
                <ItemCount stock={10} initial={1} />
                <br></br>
                <Button>Agregar al carrito</Button>
            </Card.Body>
            </Card>
        </>

    )

}