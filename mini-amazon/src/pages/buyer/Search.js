import React from "react"
import SideBarComponent from "../../components/SideBarComponent"
import SearchBar from "../../components/SearchBar"
import ProductPreview from "../../components/ProductPreview"

const styles = {
    heading: {
        background: 'orange'
    },
    container:{
        display: 'flex',
        flexDirection: 'column',
    }
}

function Search() {
    return (
        <div>
            <div className={"columns"}>
                <div className={"column is-one-fifth"}>
                    <SideBarComponent type={"buyer"}/>
                </div>
                <div style={styles.container}>
                    <div>
                        <div className={"container"} style={styles.heading}>
                            <SearchBar/>
                        </div>
                    </div>
                    <div className={"column"}>
                        <ProductPreview picture="https://m.media-amazon.com/images/I/51biqZP8+2L._AC_SX679_.jpg"/>
                        <ProductPreview picture="https://m.media-amazon.com/images/I/51biqZP8+2L._AC_SX679_.jpg"/>
                        <ProductPreview picture="https://m.media-amazon.com/images/I/51biqZP8+2L._AC_SX679_.jpg"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search;