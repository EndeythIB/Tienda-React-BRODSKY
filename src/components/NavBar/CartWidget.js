import './CartWidget.css';

//external components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const CartWidget = () => {
    return(
        <div className= "cart-button">
            <button>
                    <FontAwesomeIcon icon={faShoppingCart} size="md" />                    
            </button>
        </div>
    )
}

export default CartWidget