import React, { useState, useEffect } from "react"
import Review from "../../components/Review";
import { reviews } from './testProducts.js';
import SideBarComponent from "../../components/SideBarComponent"
import axios from "axios";

function ProductReview(props) {

    const [data, setData] = useState([]);

    useEffect(async () => {
        console.log("called backend for reviews")
        const result = await axios(
            'http://localhost:5000/api/all_product_reviews/?product_id=' + props.id, {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                },
            }
        );
        console.log(result.data)
        setData(result.data);
    }, []);

    return (
        <div>
            <div className={"columns"}>
                <div className={"column is-one-fifth"}>
                    <SideBarComponent type={"buyer"}/>
                </div>
                <div className={"column"}>
                    <div style={styles.title}>
                        Product Reviews
                    </div>
                    <div className={"container"}>
                        <div className="ProductReview-Row">
                            {data.map(item => {
                                return (
                                    <Review
                                        id={item.product_id}
                                        userName={item.userName}
                                        title={item.product_name}
                                        image={item.product_image}
                                        description={item.text}
                                        rating={item.stars}
                                        date={item.post_time}
                                    />
                                )
                            })}
                        </div>
                    </div>
                </div>    
            </div>
        </div>    
    );
}

const styles = {
    title:{
        fontSize: 30,
        width: '500px',
        alignItems: 'center',
        marginTop: '40px',
        marginLeft: '25px'
    }
}

export default ProductReview;