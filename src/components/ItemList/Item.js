import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ItemCount from "../ItemCount/ItemCount";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import './Item.css';


export const Item = ({item, props}) => {
    return(
                <div>
                    <Card style={{ width: '18rem' }}>
                    <Card.Img className="card-img" variant="top" src={item.img} />
                    <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        {/* <Card.Text>{item.description}</Card.Text> */}
                        <Card.Text>{"$" + item.price}</Card.Text>
                        {/* <ItemCount stock={10} initial={1} /> */}
                        <br></br>
                        <Button className="item-btn" variant="outline-dark">Comprar</Button>
                        <Link to={`/detail/${item.id}`}><Button className="item-btn" variant="outline-dark">Ver</Button></Link>

                    </Card.Body>
                    </Card>
                </div>            
    )};
