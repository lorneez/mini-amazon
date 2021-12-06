import React from "react";

function ProductDetailsHeader(props) {
    console.log(props.details)
    return(
        <div style = {styles.container}>
            <img style={styles.image} src={props.details.picture}/>
            <div>
                <div style = {styles.title}>{props.details.name}</div>
                <div style = {styles.title}>{props.details.price}</div>
                <div style = {styles.title}>{props.details.estimatedArrival}</div>
                <div style = {styles.title}>{props.details.shipping}</div>
                <div style = {styles.title}>{props.details.stock}</div>
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

export default ProductDetailsHeader;