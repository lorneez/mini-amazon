import React from "react";

function ProductPreview(props) {
    console.log(props)
    return(
        <div style = {styles.container}>
            <img style={styles.image} src={props.picture}/>
            <div>
                <div style = {styles.title}>{props.data.name}</div>
                <div style = {styles.title}>${props.data.price}</div>
                <div style = {styles.title}>Category: {props.data.category}</div>
                <div style = {styles.title}>Sold by {props.data.seller}</div>
                <div style = {styles.title}>Only {props.data.available_quantity} left in stock!</div>
                <div style = {styles.title}>Status: {props.data.inventory_status ? 'IN STOCK' : 'OUT OF STOCK'}</div>
            </div>
        </div>
    )
}

const styles = {
    container: {
        width: '150px',
        height: '180px',
        display: 'flex',
        flexDirection: 'row',
        marginLeft: '100px',
        marginBottom: '20px',
        marginTop: '10px',
        gap: '20px'
    },
    image: {
        width: '100%',
        height: '100%'
    },
    title:{
        width: '1000px'
    }
}

export default ProductPreview;