import './SearchBar.css'
import ButtonFilter from './ButtonFilter'
import ButtonSearch from './ButtonSearch'

function SearchBar() {
    return (
        <div className="search-bar">
            <ButtonSearch />

            <input type="text" placeholder="Search Food" />

            <ButtonFilter />
        </div>
    )
}

export default SearchBar