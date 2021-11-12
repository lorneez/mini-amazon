import React from 'react'
// import * as FaIcons from 'react-icons/fa'
// import * as AiIcons from 'react-icons/Ai'


function ProductDetails(description) {
    return (
        <section class="section is-large">
            <h1 class="title"> Product description</h1>
            <h2 class="subtitle">
                {description}
            </h2>
        </section>
    )
}

export default ProductDetails;

