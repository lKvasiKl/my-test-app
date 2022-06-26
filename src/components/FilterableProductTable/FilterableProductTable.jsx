import React from 'react'
import { useState } from 'react'
import ProductTable from '../ProductTable'
import SearchBar from '../SearchBar'

const FilterableProductTable = ({ products }) => {
    const [searchValue, setSearchValue] = useState('');
    const [checkboxValue, setCheckboxValue] = useState(false);

    const handleSearchChange = (searchValue) => {
        setSearchValue(searchValue);
    }
    const handleCheckboxChange = (checkboxValue) => {
        setCheckboxValue(checkboxValue)
    }
    let filterProducts = products.filter(product => {
        if (product.name.toLowerCase().includes(searchValue.toLowerCase())) {
            return checkboxValue
                ? product.stocked
                : true
        }

        return false;
    })
    return (
        <div>
            <SearchBar
                onSearchChanged={handleSearchChange}
                onCheckboxChanged={handleCheckboxChange} />
            <ProductTable items={filterProducts} />
        </div>
    )
}

export default FilterableProductTable