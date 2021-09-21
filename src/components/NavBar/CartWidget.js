import './CartWidget.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const CartIcon = () => {
    return(
        <div className= "cart-button">
            <button>
                    <FontAwesomeIcon icon={faShoppingCart} size="lg" />                    
            </button>
        </div>
    )
}

export default CartIcon