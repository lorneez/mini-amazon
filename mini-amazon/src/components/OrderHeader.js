import React from "react";
import Button from "react-bootstrap/Button";

const styles = {
    container: {
        marginBottom: "40px",
        marginTop: "40px",
        marginLeft: "40px",
        display: 'flex',
        flexDirection: 'row',
        gap: '550px',
        fontWeight: '900',
        fontSize: '25px'
    },
    dropdown:{
        display: 'flex',
        flexDirection: 'row',
        gap: '10px'
    }
}

function OrderHeader(props) {
    return(
    <div style = {styles.container} >
        <div>View Your Orders</div>
    </div>
    )
}

export default OrderHeader;