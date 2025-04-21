import './ButtonProfile.css'
import profileIcon from '../assets/profile.jpg'

function ButtonProfile() {
    return (
        <div className="buttonprofile">
            <img src={profileIcon} alt="profile" />
        </div>
    )
}

export default ButtonProfile