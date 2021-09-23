import React from "react"
import productImg from "../../assets/product/libroProduct.jpg"
import "./Products.css"
import Button from "@material-ui/core/Button";
import ItemCount from "../ItemCount/ItemCount"

const Product = (props) => {
    return (
        <div className="container-product">
            <div>
                <img src= {productImg} alt="imagen"/>
            </div>
                <h3>{props.title}</h3>
                <p>{props.price}</p>
                <ItemCount />
                <Button>Comprar</Button>
        </div>
    )
}

export default Product