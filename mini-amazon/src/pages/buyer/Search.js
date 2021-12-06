import React, {useState, useEffect} from "react"
import axios from 'axios';
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
    },
    containerTop: {
        paddingTop: '35px',
        paddingBottom: '25px',
        width: '1180px',
        display: 'flex', justifyContent: 'center', alignItems: 'center'
    },
    search: {
        width: '600px',
        height: '40px'
    },
    button:{
        width: '100px',
        height: '40px',
        marginLeft: '2px'
    }
}



function Search() {
    const [searchInput, setSearchInput] = useState('');
    const [data, setData] = useState([]);

    const searchItems = (searchValue) => {
        setSearchInput(searchValue)
    }

    async function search (searchValue) {
        console.log('http://0.0.0.0:5000/api/products_keyword/?keyword='+searchInput)
        const result = await axios(
            'http://0.0.0.0:5000/api/products_keyword/?keyword='+searchInput, {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                },
            }
        );
        console.log(result.data)
        setData(result.data);
    }


    return (
        <div>
            <div className={"columns"}>
                <div className={"column is-one-fifth"}>
                    <SideBarComponent type={"buyer"}/>
                </div>
                <div style={styles.container}>
                    <div class="field" style={styles.containerTop}>
                        <div class="control">
                        <input style={styles.search} icon='search' placeholder='Search by Keyword' onChange={(e) => searchItems(e.target.value)}/>
                         <button style={styles.button} onClick={()=>search()}>Search</button>
                        </div>
                    </div>
                    <div className={"column"}>
                        {
                            data.map((item)=>(
                                <div>
                                <ProductPreview data={item}/>
                                </div>
                            ))
                        }
                    </div>
                    <div>
                        {JSON.stringify(data)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search;