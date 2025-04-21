import './ButtonHeart.css'
import heartIcon from '../assets/heart.svg'

function ButtonHeart() {
    return (
        <div className="buttonheart">
            <img src={heartIcon} alt="icon" />
        </div>
    )
}

export default ButtonHeart