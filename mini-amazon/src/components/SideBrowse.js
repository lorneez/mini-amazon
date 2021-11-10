import Card from "../components/Card"
import React from "react";

const styles = {
    flex_container: {
        display: 'flex',
        flexDirection: 'row',
        paddingTop: '10px',
    },
    container:{
        paddingTop: '40px',
    }
}

function SideBrowse(props) {

    return(
        <div>
            <div style={styles.container}>
                {props.title}
                <div style={styles.flex_container}>
                {props.products.map((product)=>(
                    <Card picture={product.url}/>
                ))}
                </div>
            </div>
        </div>
    )
}

export default SideBrowse;