import './ButtonSecondary.css'
import { useNavigate } from 'react-router-dom'

interface ButtonSecondaryProps {
    text?: string;
    link?: string;
}

function ButtonSecondary({ text = 'Button', link = '#' }: ButtonSecondaryProps) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(link);
    }

    return (
        <button onClick={handleClick} className="button-secondary">
            {text}
        </button>
    )
}

export default ButtonSecondary