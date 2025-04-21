import './ButtonLocation.css'
import locationIcon from '../assets/location.svg'

function ButtonLocation() {
    return (
        <div className="buttonlocation">
            <img src={locationIcon} alt="icon" />
        </div>
    )
}

export default ButtonLocation