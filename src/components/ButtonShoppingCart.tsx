import './ButtonShopingCart.css'
import shoppingCartIcon from '../assets/shopping-cart.svg'

    function ButtonShoppingCart() {
    return (
        <div className="buttonshopingcart">
            <img src={shoppingCartIcon} alt="icon" />
        </div>
    )
}

export default ButtonShoppingCart