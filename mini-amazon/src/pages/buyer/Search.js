import React, {useState, useRef, useEffect} from "react"
import axios from 'axios';
import SideBarComponent from "../../components/SideBarComponent"
import SearchTable from "../../components/SearchTable"
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
        display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
        background: 'orange'
    },
    search: {
        width: '700px',
        height: '40px'
    },
    button:{
        width: '100px',
        height: '40px',
        marginLeft: '2px'
    },
    title:{
        fontWeight: '1000px',
        fontSize: '28px',
        marginBottom: '25px'
    }
    
}

let categories = [
    "Books",
    "Electronics",
    "Groceries",
    "Games",
    "Clothing",
  ]



function Search() {
    const [searchInput, setSearchInput] = useState('');
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1)
    const itemsPerPage = 4;

    const [selectedCategory, setSelectedCategory] = useState("")
    const [dropdownSearchValue, setDropdownSearchValue] = useState("")
    const [editMode, setEditMode] = useState(false)
    const dropdownRef = useRef()

    /**
     * Close the dropdown when clicked outside
     * Refer https://www.codingdeft.com/posts/react-on-click-outside/ for details
     */
    useEffect(() => {
        const checkIfClickedOutside = e => {
        // If the menu is open and the clicked target is not within the menu,
        // then close the menu
        if (
            editMode &&
            dropdownRef.current &&
            !dropdownRef.current.contains(e.target)
        ) {
            setEditMode(false)
        }
        }
        document.addEventListener("mousedown", checkIfClickedOutside)
        return () => {
        // Cleanup the event listener
        document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [editMode])

    const categorySelectionHandler = category => {
        setSelectedCategory(category)
        setDropdownSearchValue("")
        setEditMode(false)
    }

    const filteredCategories = categories.filter(category =>
        category.match(new RegExp(dropdownSearchValue, "i"))
    )

    //

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
                        <div style={styles.title}>Search for a Product by Keyword</div>
                        <div class="control">
                        <input style={styles.search} icon='search' placeholder='Search by Keyword' onChange={(e) => searchItems(e.target.value)}/>
                         <button style={styles.button} onClick={()=>search()}>Search</button>
                         <div className="column" >
                        <div>Filter by Category</div>

                        {editMode ? (
                            // display the dropdown when the input us focused
                            <div ref={dropdownRef} className="dropdown-wrapper">
                            <input
                                className="dropdown-input"
                                name="dropdown-input"
                                autoFocus
                                onChange={e => setDropdownSearchValue(e.target.value)}
                                value={dropdownSearchValue}
                            />
                            <div className="dropdown-list">
                                <ul>
                                {filteredCategories.map(category => {
                                    return (
                                    <li key={category} onClick={() => categorySelectionHandler(category)}>
                                        {category}{" "}
                                    </li>
                                    )
                                })}
                                {filteredCategories.length === 0 && (
                                    <li className="no-result">No results found</li>
                                )}
                                </ul>
                            </div>
                            </div>
                        ) : (
                            <input
                            className={`dropdown-search ${
                                !(dropdownSearchValue || selectedCategory) && "default"
                            }`}
                            onFocus={() => setEditMode(true)}
                            value={selectedCategory || "Select Category"}
                            />
                        )}
                    </div>
                        </div>
                    </div>
                    <div className={"column"}>
                        {
                            <SearchTable data={data} category={selectedCategory}/>
                        }
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Search;