import React from "react";
import Button from "react-bootstrap/Button";

const styles = {
    container: {
        marginBottom: "40px",
        marginTop: "40px",
        marginLeft: "40px",
        display: 'flex',
        flexDirection: 'row',
        gap: '250px'
    },
    button:{
        width: '100px',
        height: '30px',
        marginLeft: '2px',
        background: 'orange'
    },
    dropdown:{
        display: 'flex',
        flexDirection: 'row',
        gap: '10px'
    }
}

function CartHeader(props) {
    return(
    <div style = {styles.container} >
        <div>Manage Cart</div>
        <Button color='orange' style={styles.button}>Add Item</Button>
        <div style={styles.dropdown}>
        <div class="dropdown is-active">
            <div class="dropdown-trigger">
                <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
                <span>Sort By</span>
                <span class="icon is-small">
                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                </span>
                </button>
            </div>
        </div>
        <div class="dropdown is-active">
            <div class="dropdown-trigger">
                <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
                <span>Filter By</span>
                <span class="icon is-small">
                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                </span>
                </button>
            </div>
        </div>
        </div>
    </div>
    )
}

export default CartHeader;