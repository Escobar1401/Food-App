import './ButtonSearch.css'
import searchIcon from '../assets/search.svg'

function ButtonSearch() {
    return (
        <div className="buttonsearch">
            <img src={searchIcon} alt="icon" />
        </div>
    )
}

export default ButtonSearch