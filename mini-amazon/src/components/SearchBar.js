import React from "react";
import Button from "react-bootstrap/Button";

function SearchBar(props) {
    return(
    <div class="field" style={styles.container}>
        <div class="control">
            <input class = "input" type="text" placeholder="Search For Product" style={styles.search}/>
            <Button variant="outline-dark" style={styles.button}>Go</Button>
        </div>
    </div>
    )
}

const styles = {
    container: {
        paddingTop: '35px',
        paddingBottom: '25px',
        width: '1180px',
        display: 'flex', justifyContent: 'center', alignItems: 'center'
    },
    search: {
        width: '600px'
    },
    button:{
        width: '50px',
        height: '40px',
        marginLeft: '2px'
    }
}

export default SearchBar;