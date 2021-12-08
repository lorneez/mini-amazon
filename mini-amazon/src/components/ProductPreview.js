import React, {useState} from "react";
import Details from "./Details"


function ProductPreview(props) {

    const [show, setShow] = useState(false);
    console.log(props)

    function renderDetails() {
        console.log(show)


        if(show) {
            return (
                <div>
                    <Details 
                        id={props.data.id}
                        title={props.data.name}
                        image={props.data.image_id}
                        price={props.data.price}
                        seller_id={props.data.seller}
                    />
                </div>
            )
        }
        else {
            return (
                <div></div>
            )
        }
    }

    return(
        <div className="container" style={styles.bigContainer}>
            <div style={styles.container}>
                <img style={{height: "150px", width: "100px"}} src={props.data.image_id}/>
                <div>
                    <div style = {styles.title}>{props.data.name}</div>
                    <div style = {styles.title}>${props.data.price}</div>
                    <div style = {styles.title}>Category: {props.data.category}</div>
                    <div style = {styles.title}>Sold by {props.data.seller}</div>
                    <div style = {styles.title}>Only {props.data.available_quantity} left in stock!</div>
                    <div style = {styles.title}>Status: {props.data.inventory_status ? 'IN STOCK' : 'OUT OF STOCK'}</div>
                </div>
            </div>
            <button class='button' style={styles.button} onClick={()=>setShow(!show)}>View Details</button>
            <div>
                {renderDetails()}
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
        marginLeft: '200px', 
        marginTop: '10px',
        gap: '20px'
    },
    image: {
        width: '100%',
        height: '100%'
    },
    title:{
        width: '1000px'
    },
    button:{
        marginLeft: '200px',
    },
    bigContainer:{
        marginBottom: '50px'
    }
}

export default ProductPreview;