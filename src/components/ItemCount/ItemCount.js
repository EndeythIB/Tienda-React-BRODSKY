import React, {useState} from "react";
import "./ItemCount.css";

import Button from "@material-ui/core/Button";

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
            <Button onClick= {removeOne} disabled= {counter <= initial} variant="outlined"> - </Button>

            <span className="counter-text"> {counter} </span>

            <Button onClick= {addOne} disabled= {counter >= stock} variant="outlined"> + </Button>
        </div>

        </div>

    )
}

export default ItemCount