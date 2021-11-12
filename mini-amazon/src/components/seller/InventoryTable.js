import React, {useState} from "react";
import InventoryItem from "./InventoryItem";

function InventoryTable(props) {

    const [page, setPage] = useState(1)

    function renderPage() {
        const start = (page - 1) * 10
        const end = Math.min(props.items.length, page * 10)
        const slicedItems = props.items.slice(start, end);
        console.log(slicedItems)
        return (
            <div>
                {slicedItems.map((item)=>(
                    <InventoryItem item={item}/>
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
        if(page < (props.items.length)/10 + 1) {
            setPage(page + 1)
        }
    }

    function renderButtons() {
        if(page > 1 && page < (props.items.length)/10 + 1) {
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
                <div className={"column"}>
                    Product Details
                </div>
                <div className={"column"}>
                    Available
                </div>
                <div className={"column"}>
                    Price
                </div>
                <div className={"column"}>
                    Date Created
                </div>
                <div className={"column"}>
                    Status
                </div>
            </div>
            {renderPage()}
            {renderButtons()}
        </div>
    )
}

export default InventoryTable;

