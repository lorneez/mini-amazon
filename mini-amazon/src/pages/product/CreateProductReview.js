import React, {useContext, useState} from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import {AuthContext} from "../../contexts/AuthContext";
import { Rating } from 'react-simple-star-rating';


function CreateProductReview(id) {
    const history = useHistory();
    const auth = useContext(AuthContext);
    const { state } = auth;
    const { userId } = state;
    const [rating, setRating] = useState(0) 

    const [review, setReview] = useState("")

    const handleRating = (rate) => {
        setRating(rate)
      }

    async function submitReview() {
        const result = await axios.post(
            'http://localhost:5000/api/add_product_review/?user_id=' + userId + '&product_id=' + id + '&review_text=' + review + '&stars=' + rating, {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                },
            }
        ).then((response) => {
            console.log(response)
        })
        window.location.reload(false);
    }

    return (
        <div>
            <div className={"columns"}>
                <div className={"column"}>
                    <section className="hero">
                        <div className="hero-body">
                            <p className="title">
                                Create Product Review
                            </p>
                        </div>
                    </section>
                    <div className={"container m-1"}>
                        <div>
                            <Rating
                                onClick={handleRating}
                                ratingValue={rating} /* Available Props */
                            />
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

export default CreateProductReview;