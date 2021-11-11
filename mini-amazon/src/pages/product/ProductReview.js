import React from "react"
import Review from "../../components/Review";
import { reviews } from './testProducts.js';
import SideBarComponent from "../../components/SideBarComponent"

function ProductReview() {
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
                            {reviews.map(item => {
                                return (
                                    <Review
                                        id={item.id}
                                        userName={item.userName}
                                        title={item.title}
                                        image={item.image}
                                        description={item.description}
                                        rating={item.rating}
                                        date={item.date}
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