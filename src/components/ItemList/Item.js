import React from "react";
import { Link } from "react-router-dom";

//StyleSheet
import './Item.css';

//External Components
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


export const Item = ({item, props}) => {
    return(
                <div>
                    <Card style={{ width: '18rem' }}>
                    <Card.Img className="card-img" variant="top" src={item.img} />
                    <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>{"$" + item.price}</Card.Text>
                        <br></br>
                        <Link to={`/detail/${item.id}`}><Button className="item-btn" variant="outline-dark">Detalles 👁️</Button></Link>

                    </Card.Body>
                    </Card>
                </div>            
    )};
