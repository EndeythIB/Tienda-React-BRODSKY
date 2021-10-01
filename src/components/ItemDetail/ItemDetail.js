import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ItemCount from "../ItemCount/ItemCount";
import 'bootstrap/dist/css/bootstrap.min.css';
import './ItemDetail.css';

export default function ItemDetail(props) {
    return (
        <>
            <Card style={{ width: '18rem' }}>
            <Card.Img className="card-img" variant="top" src={props.data[0]?.img} />
            <Card.Body>
                <Card.Title>{props.data[0]?.title}</Card.Title>
                <Card.Text>{props.data[0]?.description}</Card.Text>
                <Card.Text>{props.data[0]?.price}</Card.Text>
                <ItemCount stock={10} initial={1} />
                <br></br>
                <Button>Agregar al carrito</Button>
            </Card.Body>
            </Card>
        </>

    )

}