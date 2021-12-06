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

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    async function submitReview() {
        const result = await axios(
            'http://localhost:5000/api/seller/create-review/', {
                title: title,
                description: description,
                sellerId: props.sellerId,
                userId: userId,
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
                <div className={"column is-one-fifth"}>
                    <SideBarComponent type={"seller"}/>
                </div>
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
                                Title
                            </div>
                            <input
                                className="input is-primary"
                                value={title}
                                type="text"
                                placeholder="Title"
                                onChange={(e)=>setTitle(e.target.value)}
                                style={{width: "50%"}}
                            />
                        </div>
                        <div>
                            <div>
                                Description
                            </div>
                            <input
                                className="input is-primary"
                                value={description}
                                type="text"
                                placeholder="Description"
                                onChange={(e)=>setDescription(e.target.value)}
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