import React, {useState} from "react"


export default function ItemCount(props) {
    const [item, setItem] = useState(1)
    const [stock, setStock] = useState(10)
    const [disablePlusButton, setDisablePlusButton] = useState(false)
    const [disableSubstractButton, setDisableSubstractButton] = useState(false)

    const sumar = () => {
        if(item < stock){
            setItem(item + 1)
        }else{
            setDisablePlusButton(true)
        }
        
    }
    const restar = () => {
        if(item == 1) {
            setDisableSubstractButton(true)
        }else if(item >= 2){
            setDisableSubstractButton()
            setItem(item - 1)
        }
    }


    return ( 
        <div className="item-count">
            <button disabled={disableSubstractButton} onClick={restar}>-</button>
                {item}
            <button disabled={disablePlusButton} onClick={sumar}>+</button>
        </div>
    )
}