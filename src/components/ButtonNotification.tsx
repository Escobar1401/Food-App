import './ButtonNotification.css'
import notificationIcon from '../assets/notification.svg'

function ButtonNotification() {
    return  (
        <div className="buttonnotification">
            <img src={notificationIcon} alt="icon" />
        </div>
    )
}

export default ButtonNotification