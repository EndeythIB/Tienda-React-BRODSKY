import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ItemCount from "../ItemCount/ItemCount";
import 'bootstrap/dist/css/bootstrap.min.css';
import './ItemDetail.css';

export default function ItemDetail(props) {
    return (
        <>
        <div className="detail-wrapper">
            <div className="detail-img">
                <img src={props.data[0]?.img}></img>
                <img src={props.data[0]?.img}></img>
                <img src={props.data[0]?.img}></img>
            </div>
            <div className="detail-description">
                <h2>{props.data[0]?.title}</h2>
                <p>{props.data[0]?.description}</p>
                <p>{"$" + props.data[0]?.price}</p>
                {<ItemCount stock={10} initial={1}/>}
                <br></br>
                <div className="d-grid gap-2">
                    <Button variant="outline-danger">Agregar al carrito</Button>
                </div>
            </div>

        </div>
        </>

    )

}