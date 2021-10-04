import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";
import "./ItemCount.css";

const ItemCount = ({ stock, initial, onAdd }) => {

    const [counter, setCounter] = useState(initial);

    const addOne = () => {
        if (counter < stock) {
            setCounter(counter + 1);
        }
    };

    const removeOne = () => {
        if (counter > initial) {
            setCounter(counter - 1);
        }
    };

    return (
        
        <div className="flex-container">

        <div className="flex-item">
            <Button onClick= {removeOne} disabled= {counter <= initial} variant="outline-danger"> - </Button>

            <span className="counter-text"> {counter} </span>

            <Button onClick= {addOne} disabled= {counter >= stock} variant="outline-danger"> + </Button>
        </div>

        </div>

    )
}

export default ItemCount