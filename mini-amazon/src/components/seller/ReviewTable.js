import React, {useState} from "react";
import InventoryItem from "./InventoryItem";

function ReviewTable(props) {

    const [page, setPage] = useState(1)
    const itemsPerPage = 3;

    function renderPage() {
        const start = (page - 1) * itemsPerPage
        const end = Math.min(props.items.length, page * itemsPerPage)
        const slicedItems = props.items.slice(start, end);
        console.log(slicedItems)
        return (
            <div>
                {slicedItems.map((item)=>(
                    <ReviewItem item={item}/>
                ))}
            </div>
        )
    }

    function handlePrev() {
        if(page > 1) {
            setPage(page - 1)
        }
    }

    function handleNext() {
        if(page < (props.items.length)/itemsPerPage + 1) {
            setPage(page + 1)
        }
    }

    function renderButtons() {
        if(page > 1 && page < (props.items.length)/itemsPerPage + 1) {
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
        <div className={"table"}>
            <div className={"columns m-2"} style={{background: "#F2AA56", borderRadius: "5px"}}>
                Reviews
            </div>
            {renderPage()}
            {renderButtons()}
        </div>
    )
}

export default ReviewTable;
