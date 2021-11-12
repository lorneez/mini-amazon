import React from "react";

function ReviewItem(props) {
    return (
        <div className={"m-2 p-3"} style={{background: "#E1E1E3", borderRadius: "5px"}}>
            <div>
                Macbook Pro 111
            </div>
            <div className={"columns p-3"}>
                <div className={"pr-2"}>
                    * * * * *
                </div>
                <div className={"pl-2"}>
                    Amazing Macbook!
                </div>
            </div>
            <div>
                Reviewed by Lorne on August 3rd, 2021
            </div>
            <div>
                I really enjoyed this product. It was the best product in the world. I hope to order some more soon!
                I really enjoyed this product. It was the best product in the world. I hope to order some more soon!
                I really enjoyed this product. It was the best product in the world. I hope to order some more soon!
            </div>
            <div className={"columns p-3"}>
                <div className={"pr-2"}>
                    5 Up Votes
                </div>
                <div className={"pl-2"}>
                    6 Down Votes
                </div>
            </div>
        </div>
    )
}

export default ReviewItem;