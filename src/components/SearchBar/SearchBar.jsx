import React from 'react'
import { ReactComponent as SearchSvg } from '../../assets/SearchVector.svg'

const SearchBar = ({ onSearchChanged, onCheckboxChanged }) => {
    const handleSearchChanged = (e) => {
        onSearchChanged(e.target.value);
    }
    const handleCheckBoxChanged = (e) => {
        onCheckboxChanged(e.target.checked);
    }
    return (
        <div>
            <div>
                <SearchSvg />
                <input type="text" placeholder="Search..." onChange={handleSearchChanged} />
            </div>
            <div>
                <p>
                    <input id='checkbox' type="checkbox" onChange={handleCheckBoxChanged} />
                    <label htmlFor='checkbox'>Only show products in stock</label>
                </p>

            </div>
        </div>
    )
}

export default SearchBar