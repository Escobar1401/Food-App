import './ButtonChat.css'
import chatIcon from '../assets/chat.svg'

function ButtonChat() {
    return (
        <div className="buttonchat">
            <img src={chatIcon} alt="icon" />
        </div>
    )
}

export default ButtonChat