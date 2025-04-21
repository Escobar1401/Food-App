import './FoodDetails.css'
import { useNavigate } from 'react-router-dom'
import ButtonBack from './ButtonBack'
import ButtonFavorite from './ButtonFavorite'
import avocadaSalad from '../assets/avocada_salad.jpg'
import ButtonPrimary from './ButtonPrimary'

function FoodDetails() {
    const navigate = useNavigate();

    return (
        <div className="food-details-container">
            <div className="header">
                <ButtonBack onClick={() => navigate(-1)} />
                <span>Food Details</span>
                <ButtonFavorite />
            </div>

            <div className="content">
                <div className="food-image">
                    <img src={avocadaSalad} alt="Food" />
                </div>
                <div className="food-info">
                    <div className="food-name"> 
                        <span>Avocada Salad</span>
                    </div>
                    <div className="food-price green">
                        <span>$15.00</span>
                        <div className="add-item">
                            <button>-</button>
                            <span>1</span>
                            <button>+</button>
                        </div>
                    </div>
                    <div className="food-status">
                        <div className="food-status-calification">
                            <span>⭐</span>
                            <span>4.5</span>
                        </div>
                        <div className="food-status-calories">
                            <span>🔥</span>
                            <span>100Kcal</span>
                        </div>
                        <div className="food-status-time">
                            <span>🕒</span>
                            <span>10 min</span>
                        </div>
                    </div>
                    <div className="food-description">
                        <div className="food-description-title">
                            <span>About Food</span>
                        </div>
                        <div className="food-description-text">
                            <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil ipsam dolor vel animi rerum suscipit, perspiciatis quis est repellendus modi quo facere blanditiis impedit ipsum voluptas? Aliquid ducimus corporis explicabo quod doloribus quis eaque dolore esse, quos doloremque eveniet fuga...</span>
                            <span className="food-description-text-read-more">Read More</span>
                        </div>
                    </div>
                    <div className="button-food-details-add-cart">
                        <ButtonPrimary text="Add to Cart" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FoodDetails 