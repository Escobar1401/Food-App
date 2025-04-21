import './Home.css'
import ButtonProfile from './ButtonProfile'
import ButtonLocation from './ButtonLocation'
import ButtonMenu from './ButtonMenu'
import ButtonChat from './ButtonChat'
import Card from './Card'
import ButtonHome from './ButtonHome'
import ButtonHeart from './ButtonHeart'
import ButtonNotification from './ButtonNotification'
import ButtonShoppingCart from './ButtonShoppingCart'
import SearchBar from './SearchBar'

function Home() {
    return (
        <div className="home-container">
            <div className="navigation">
                <ButtonMenu />
                <div className="location">
                    <ButtonLocation />
                    <span>East Blue</span>
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
                <SearchBar />
            </div>

            <div className="categories">
                <span className='green'>Food</span>
                <span>Fruits</span>
                <span>Vegetables</span>
                <span>Grocery</span>
            </div>

            <div className="products">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>

            <div className="footer">
                <ButtonHome />
                <ButtonChat />
                <ButtonShoppingCart />
                <ButtonNotification />
                <ButtonHeart />
            </div>
        </div>
    )
}

export default Home 