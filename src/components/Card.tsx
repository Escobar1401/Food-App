import './Card.css'
import ButtonAddCart from './ButtonAddCart'
function Card() {
    return (
        <div className="card">
            <div className="top">
                <div className="favorite">♥</div>
                <img src="src/assets/avocada_salad.jpg" alt="avocada salad" />
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