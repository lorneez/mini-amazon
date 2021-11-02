import React from "react";

function ProductPreview(props) {
    return(
        <div style = {styles.container}>
            <img style={styles.image} src={props.picture}/>
            <div>
                <div style = {styles.title}>(Renewed) Apple iPhone 8, US Version, 64GB, Gold - GSM Carriers, Latest Version</div>
                <div style = {styles.title}>$500</div>
                <div style = {styles.title}>Get it Wed, Oct 13 - Fri, Oct 15</div>
                <div style = {styles.title}>FREE SHIPPING</div>
                <div style = {styles.title}>Only 1 left in stock - order soon.</div>
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