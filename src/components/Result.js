import React from 'react'
import "./Result.css"
import Item from "./Item"

function Result({ products }) {
    return (
        <>
            {
                products.length <= 0 ? (
                    <div className="no_results">No Results Found !!!</div>
                ) : (
                    <div className="product_results_container">
                        {products.map((product, i) => {
                            return <Item key={i} product={product} />;
                        })}
                    </div>
                )
            }
        </>
    )
}

export default Result