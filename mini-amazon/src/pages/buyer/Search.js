import React from "react"
import SideBarComponent from "../../components/SideBarComponent"


function Search() {
    return (
        <div>
    <div className={"columns"}>
        <div className={"column is-one-fifth"}>
            <SideBarComponent type={"buyer"}/>
        </div>
        <div className={"column"}>
            <div className={"container"}>
                Search
            </div>
        </div>
    </div>
</div>
    )
}

export default Search;