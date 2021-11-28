import React from "react";

function Card(props) {
    return(
        <div style = {styles.card}>
            <img style={styles.image} src={props.picture}/>
        </div>
    )
}

const styles = {
    card: {
        flexDirection: 'row',
        width: '150px',
        height: '150px',
        border: '3px solid black',
        boxSizing: 'border-box',
        fontSize: '2.5cm',
        color: 'white'
    },
    image: {
        width: '100%',
        height: '100%'
    }
}

export default Card;