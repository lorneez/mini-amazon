import React from "react";
import Avatar from "react-avatar";

function UserDisplay(name) {
    return(
        <div>
            <div className={"columns"}>
                <div column-is-one-fifth>
                    <Avatar round={true} size={40} name={name}/>
                </div>
                <div column>
                    <div style={styles.title}> {name} </div>
                </div>
            </div>
        </div>
    )
}
const styles = {
    title:{
        width: '1000px'
    }
}

export default UserDisplay;