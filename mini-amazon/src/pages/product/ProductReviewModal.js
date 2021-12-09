import React, { useState, useEffect } from "react"
import Review from "../../components/Review";
import axios from "axios";

function ProductReviewModal(props) {

    const [data, setData] = useState([]);
    const [sellerdata, setsellerData] = useState([]);

    useEffect(async () => {
        const result = await axios(
            'http://localhost:5000/api/all_seller_reviews/?seller_id=' + props.seller, {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                },
            }
        );
        setsellerData(result.data);
        console.log(result.data)
    }, []);

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

    const [page, setPage] = useState(1)
    const itemsPerPage = 3;

    function renderPage() {
        const start = (page - 1) * itemsPerPage
        const end = Math.min(data.length, page * itemsPerPage)
        const slicedItems = data.slice(start, end);
        const slicedSellerReviews = sellerdata.slice(start,end);

        return (
            <div className="columns"> 
                <div className="column is-one-third"> 
                <div style={styles.title}>
                        Product Reviews
                    </div>
                <div>                
                    {slicedItems.map((item)=>(
                        <Review item={item}/>
                    ))}
                </div>
                </div>
                <div className="column is-one-third"> 
                <div style={styles.title}>
                        Seller Reviews
                    </div>
                <div>
                    {slicedSellerReviews.map((item) => (
                        <Review item={item}/>
                    ))}
                </div>
                </div>
            </div>
        )
    }

    function handlePrev() {
        if(page > 1) {
            setPage(page - 1)
        }
    }

    function handleNext() {
        if(page < (data.length)/itemsPerPage + 1) {
            setPage(page + 1)
        }
    }

    function renderButtons() {
        if(page > 1 && page < (data.length)/itemsPerPage + 1) {
            return (
                <div>
                    <button className="button m-2" onClick={() => handlePrev()}>Prev</button>
                    <button className="button m-2" onClick={() => handleNext()}>Next</button>
                </div>
            )
        }
        if(page === 1) {
            return (
                <div>
                    <button className="button m-2" onClick={() => handleNext()}>Next</button>
                </div>
            )
        }
        else {
            return (
                <div>
                    <button className="button m-2" onClick={() => handlePrev()}>Prev</button>
                </div>
            )
        }
    }


    return (
        <div>
            <div className={"columns"}>
                <div className={"column"}>
                    <div className={"container"}>
                        {/* <div className="ProductReview-Row"> */}
                            {renderPage()}
                            {renderButtons()}  

                            {/* {data.map(item => {
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
                            })} */}
                        {/* </div> */}
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

export default ProductReviewModal;