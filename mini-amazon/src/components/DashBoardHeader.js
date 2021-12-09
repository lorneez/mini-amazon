import React, {useContext, useState} from "react";
import { useHistory } from "react-router-dom";
import {AuthContext} from "../contexts/AuthContext";

function DashBoardHeader(props) {
    const history = useHistory();
    const auth = useContext(AuthContext);
    const { state } = auth;
    const { username } = state;

    const styles = {
        header: {
            fontWeight: "Bold"
        }
    }
    
    return(
    <div class = "card">
        <div class="card-content" style = {styles.header}>
            <div class="content">
                WELCOME {username}!
            </div>
            <div class="content">
                Your most recent order is out for delivery!
            </div>
            <div class="content">
                Check out the newest deals for this upcoming Holiday sale!
            </div>
        </div>
    </div>
    )
}

export default DashBoardHeader;