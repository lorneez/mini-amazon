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

function SideBrowse({title}, {products}) {
    return(
        <div>
            <div style={styles.container}>
                {title}
                <div style={styles.flex_container}>
                {products.map((product)=>(
                    <Card picture={product.url}/>
                ))}
                </div>
            </div>
        </div>
    )
}

export default SideBrowse;