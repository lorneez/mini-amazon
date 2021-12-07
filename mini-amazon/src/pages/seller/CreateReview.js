import React, {useContext, useState} from "react";
import SideBarComponent from "../../components/SideBarComponent";
import axios from "axios";
import { useHistory } from "react-router-dom";
import {AuthContext} from "../../contexts/AuthContext";

function CreateReview(props) {
    const history = useHistory();
    const auth = useContext(AuthContext);
    const { state } = auth;
    const { userId } = state;

    const [review, setReview] = useState("")

    async function submitReview() {
        const result = await axios(
            'http://localhost:5000/api/add_seller_review/?seller_id=' + props.sellerId + '&user_id=' + userId + '&review_text=' + review, {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                },
            }
        ).then((response) => {
            console.log(response)
        })

        // history.push("/seller/dashboard");
    }

    return (
        <div>
            <div className={"columns"}>
                <div className={"column"}>
                    <section className="hero">
                        <div className="hero-body">
                            <p className="title">
                                Create Review
                            </p>
                            <p className="subtitle">
                                Create Review Here!
                            </p>
                        </div>
                    </section>
                    <div className={"container m-2"}>
                        <div>
                            <div>
                                Review
                            </div>
                            <input
                                className="input is-primary"
                                value={review}
                                type="text"
                                placeholder="Review"
                                onChange={(e)=>setReview(e.target.value)}
                                style={{width: "50%"}}
                            />
                        </div>
                    </div>
                    <button className="button m-2" onClick={() => submitReview()}>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default CreateReview;