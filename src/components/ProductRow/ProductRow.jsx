import React from 'react'

const ProductRow = ({ name, stocked, price }) => {
    return (
        <div>
            <p className={stocked && 'stockedColor'}>{name}</p>
            <p>{price}</p>
        </div>
    )
}

export default ProductRow;