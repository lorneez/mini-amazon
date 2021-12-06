import React, {useState} from "react";
import ProductPreview from "./ProductPreview"


function OrderTable(props) {

    const [page, setPage] = useState(1)
    const itemsPerPage = 6;

    function renderPage() {
        const start = (page - 1) * itemsPerPage
        const end = Math.min(props.data.length, page * itemsPerPage)
        const slicedItems = props.data.slice(start, end);

        return (
            <div>
                {slicedItems.map((item)=>(
                    <ProductPreview data={item}/>
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
        if(page < (props.data.length)/itemsPerPage + 1) {
            setPage(page + 1)
        }
    }

    function renderButtons() {
        if(page > 1 && page < (props.data.length)/itemsPerPage + 1) {
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
            {renderPage()}
            {renderButtons()}
        </div>
    )
}

export default OrderTable;