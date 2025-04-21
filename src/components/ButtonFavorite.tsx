import './ButtonFavorite.css'
import favoriteIcon from '../assets/favorite.svg'

function ButtonFavorite() {
    return (
        <div className="buttonfavorite">
            <img src={favoriteIcon} alt="icon" />
        </div>
    )
}

export default ButtonFavorite