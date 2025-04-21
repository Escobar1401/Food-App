import './ButtonHome.css'
import homeIcon from '../assets/home.svg'

function ButtonHome() {
    return (
        <div className="buttonhome">
            <img src={homeIcon} alt="icon" />
        </div>
    )
}

export default ButtonHome