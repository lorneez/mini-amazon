import React, {useContext, useEffect, useState} from "react"
import SideBarComponent from "../../components/SideBarComponent"
import ReviewTable from "../../components/seller/ReviewTable";
import axios from "axios";
import {AuthContext} from "../../contexts/AuthContext";

const rows = [
    {test: 1},
    {test: 1},
    {test: 1},
    {test: 1},
    {test: 1},
    {test: 1},
    {test: 1},
    {test: 1},
    {test: 1},
    {test: 1},
    {test: 1},
    {test: 1},
    {test: 1},
    {test: 1},
    {test: 1},
    {test: 1},
    {test: 1},
    {test: 1},
    {test: 1},
    {test: 1},
    {test: 1}
]

function Reviews() {

    const auth = useContext(AuthContext);
    const { state } = auth;
    const { userId } = state;

    const [data, setData] = useState([]);

    useEffect(async () => {
        // const result = await axios(
        //     'http://localhost:5000/api/all_seller_reviews/?seller_id=' + userId, {
        //         headers: {
        //             'Access-Control-Allow-Origin': '*',
        //         },
        //     }
        // );
        const result = await axios(
            'http://localhost:5000/api/all_seller_reviews/?seller_id=0', {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                },
            }
        );
        setData(result.data);
        console.log(result.data)
    }, []);


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
                                Reviews
                            </p>
                            <p className="subtitle">
                                Here are your reviews!
                            </p>
                        </div>
                    </section>
                    <div className={"container"}>
                        <ReviewTable items={data}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reviews;