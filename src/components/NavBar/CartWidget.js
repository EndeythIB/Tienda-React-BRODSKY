import './CartWidget.css';

//external components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const CartWidget = () => {
    return(
        <div className= "cart-button">
            <button>
                    <FontAwesomeIcon icon={faShoppingCart} size="sm" />                    
            </button>
        </div>
    )
}

export default CartWidget