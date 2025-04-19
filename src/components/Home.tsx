import ButtonChat from './ButtonChat'
import ButtonHome from './ButtonHome'
import ButtonLocation from './ButtonLocation'
import ButtonMenu from './ButtonMenu'
import ButtonNotification from './ButtonNotification'
import ButtonProfile from './ButtonProfile'
import ButtonSearch from './ButtonSearch'
import ButtonShoppingCart from './ButtonShoppingCart'
import ButtonHeart from './ButtonHeart'
import './Home.css'
import Card from './Card'

function Home() {
    return (
        <div className="container">
            <div className="navigation">
                <ButtonMenu />
                <div className="location">
                    <ButtonLocation />
                    <span>Location</span>
                </div>
                <ButtonProfile />
            </div>

            <div className="titles">
                <div className="welcome">
                    <span>Hi, Monkey D. Luffy</span>
                </div>
                <div className="find">
                    <span>Find your favorite food</span>
                </div>
            </div>

            <div className="search">
                <ButtonSearch />
            </div>

            <div className="categories">
                <div className="category">
                    <span>Food</span>
                    <span>Fruits</span>
                    <span>Vegetables</span>
                    <span>Grocery</span>
                </div>
            </div>

            <div className="products">
                <div className="product">
                    <Card />
                    <Card />
                </div>
                <div className="product">
                    <Card />
                    <Card />
                </div>
                <div className="product">
                    <Card />
                    <Card />
                </div>
                <div className="product">
                    <Card />
                    <Card />
                </div>
            </div>

            <div className="footer">
                <div className="footer-content">
                    <ButtonHome /> 
                    <ButtonChat /> 
                    <ButtonShoppingCart />
                    <ButtonNotification />
                    <ButtonHeart />
                </div>
            </div>
        </div>
    )
}

export default Home 