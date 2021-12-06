import React from "react";

function DashBoardHeader(props) {

    const styles = {
        header: {
            fontWeight: "Bold"
        }
    }
    
    return(
    <div class = "card">
        <div class="card-content" style = {styles.header}>
            <div class="content">
                WELCOME LORNE
            </div>
            <div class="content">
                Your most recent order #456 is out for delivery!
            </div>
            <div class="content">
                Check out the newest deals for this upcoming Black Friday sale!
            </div>
        </div>
    </div>
    )
}

export default DashBoardHeader;