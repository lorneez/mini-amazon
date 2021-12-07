import React from "react";
import Avatar from 'react-avatar';
import { RatingView } from 'react-simple-star-rating';

//id, title, userName, description, rating, image, date

function Review(props) {
    const rating = Math.round(props.item.stars)
    return(
        <div style = {styles.container}>
            <div>
            <div>
                <div className={"columns"}>
                    <div className="column is-one-sixth">
                        <Avatar round={true} size={40} name={props.item.from_id}/>
                    </div>
                    <div column>
                        <div container style={styles.name}>
                        <div style={styles.title} centered>  {props.item.from_id} </div>
                        </div>
                    </div>
                </div>
                <div style = {styles.title}> {props.item.product_name} </div>
                <RatingView ratingValue={rating}></RatingView> 
                <div style = {styles.title}> {props.item.post_time} </div>
                <div style = {styles.title}> {props.item.text} </div>
            </div> 
            </div>
            {/* <div style={styles.imagecontainer} >
                <img style={styles.image} src={image}/>
            </div> */}
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
        marginTop: '30px',
        marginRight: '30px',
        gap: '20px'
    },
    image: {
        width: '100%',
        height: '100%',
    },
    imagecontainer:{
        display:'flex',
        marginRight: '100px',
    },
    title:{
        width: '800px',
        alignItems: 'center',
    },
    name:{
        width: '1000px',
        alignItems: 'center',
        marginTop: '20px'
    }
}

export default Review;