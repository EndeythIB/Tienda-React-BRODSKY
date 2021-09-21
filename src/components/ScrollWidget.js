import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import "../App.css";

const ScrollWidget = () => {
    return(
        <div className= "down-button">
            <a href="#catalog">
                    
                    <FontAwesomeIcon icon={faArrowDown} size="lg" />
                   
            </a>
        </div>
    )
}

export default ScrollWidget;