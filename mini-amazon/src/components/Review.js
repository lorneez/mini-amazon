import React from "react";
import Avatar from 'react-avatar';
import { RatingView } from 'react-simple-star-rating';

function Review({id, title, userName, description, rating, image, date}) {
    return(
        <div style = {styles.container}>
            <div>
            <div>
                <div className={"columns"}>
                    <div class="column is-one-sixth">
                        <Avatar round={true} size={40} name={userName}/>
                    </div>
                    <div column>
                        <div container style={styles.name}>
                        <div style={styles.title} centered>  {userName} </div>
                        </div>
                    </div>
                </div>
                <div style = {styles.title}> {title} </div>
                <RatingView ratingValue={rating}></RatingView> 
                <div style = {styles.title}> {date} </div>
                <div style = {styles.title}> Product was great. Would recommend. </div>
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