import React from "react";

//StyleSheet
import "./ItemCount.css";

//External Components
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";

const ItemCount = (props) => {

    return (
        
        <div className="flex-container">

        <div className="flex-item">
            <Button onClick= {props.removeOne} disabled= {props.counter <= 0} variant="outline-danger"> - </Button>

            <span className="counter-text"> {props.counter} </span>

            <Button onClick= {props.addOne} disabled= {props.counter >= props.stock} variant="outline-danger"> + </Button>
        </div>

        </div>

    )
}

export default ItemCount