import React, { useState } from "react";
import {RatingView} from "react-simple-star-rating";

function ReviewItem(props) {
    const [upVotes, setUpVotes] = useState(props.item.up_votes)
    const [downVotes, setDownVotes] = useState(props.item.down_votes)
    return (
        <div className={"m-2 p-3"} style={{background: "#E1E1E3", borderRadius: "5px"}}>
            <div>
                <RatingView ratingValue={props.item.stars}></RatingView>
            </div>
            <div>
                Reviewed by {props.item.from_id} on {props.item.post_time}
            </div>
            <div>
                {props.item.text}
            </div>
            <div className={"columns p-3"}>
                <div className={"pr-2"}>
                    <button className={"button"} onClick={() => setUpVotes(upVotes+1)}>
                        {upVotes} Up Votes
                    </button>
                </div>
                <div className={"pl-2"}>
                    <button className={"button"} onClick={() => setDownVotes(downVotes+1)}>
                        {downVotes} Down Votes
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ReviewItem;