import React from "react";

function ReviewItem(props) {
    return (
        <div className={"m-2"} style={{background: "#E1E1E3", borderRadius: "5px"}}>
            <div>
                Name
            </div>
            <div className={"columns"}>
                <div className={"column"}>
                    * * * * *
                </div>
                <div className={"column"}>
                    Title
                </div>
            </div>
            <div>
                Description
            </div>
        </div>
    )
}

export default ReviewItem;