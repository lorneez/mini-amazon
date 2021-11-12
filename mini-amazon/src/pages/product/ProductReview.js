import React, { useState, useEffect } from "react"
import Review from "../../components/Review";
import { reviews } from './testProducts.js';
import SideBarComponent from "../../components/SideBarComponent"
import axios from "axios";

function ProductReview() {

    const [data, setData] = useState([]);

    useEffect(async () => {
        const result = await axios(
            'http://127.0.0.1:5000/api/all_product_reviews/?product_id=1', {
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