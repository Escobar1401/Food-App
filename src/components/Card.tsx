import './Card.css'
import ButtonAddCart from './ButtonAddCart'
import avocadaSalad from '../assets/avocada_salad.jpg'
import { useNavigate } from 'react-router-dom'

function Card() {
    const navigate = useNavigate();

    const handleImageClick = () => {
        navigate('/food/1'); // Por ahora usamos un ID fijo, luego podemos hacerlo dinámico
    }

    return (
        <div className="card">
            <div className="top">
                <div className="favorite">♥</div>
                <img 
                    src={avocadaSalad} 
                    alt="avocada salad" 
                    onClick={handleImageClick}
                    style={{ cursor: 'pointer' }}
                />
            </div>

            <div className="middle">
                <div className="title">
                    <span>Avocada Salad</span>
                </div>
                <div className="description">
                    <div className="time">
                        <span>10 min</span>
                    </div>
                    <div className="calificacion">
                        <span className="star">★</span>
                        <span>4.5</span>
                    </div>
                </div>
            </div>

            <div className="bottom">
                <div className="price">
                    <span>$15.00</span>
                </div>
                <ButtonAddCart />
            </div>
        </div>
    )
}

export default Card