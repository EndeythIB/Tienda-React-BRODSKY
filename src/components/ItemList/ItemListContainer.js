import "./ItemListContainer.css"
import sadFace from "../../assets/emptyCatalog.png"



const ItemListContainer = () => {
    return(
        <div class="item-container">
            
                    <h2>Ups, nuestra tienda aún no tiene ningún item...</h2>
                    <img src={sadFace}/>
                    <p>Por favor, esperá a que carguemos nuestro catálogo</p>
        </div>
    )
}

export default ItemListContainer;