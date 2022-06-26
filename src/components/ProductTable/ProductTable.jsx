import React from 'react'
import ProductCategoryRow from '../ProductCategoryRow';
import ProductRow from '../ProductRow';

const ProductTable = ({ items }) => {
    const rows = [];
    let lastCategory = null;
    items.forEach((product) => {
        if (product.category !== lastCategory) {
            rows.push(<ProductCategoryRow
                category={product.category}
                key={product.category} />);
        }
        rows.push(<ProductRow
            name={product.name}
            price={product.price}
            stocked={product.stocked}
            key={product.name} />
        );
        lastCategory = product.category;
    });

    return (
        <div>
            <div>
                <p>Name</p>
                <p>Price</p>
            </div>
            <ul>{rows}</ul>
        </div>
    )
}

export default ProductTable