import React, {useContext, useState} from "react";
import axios from "axios";
import {AuthContext} from "../../contexts/AuthContext";
import SideBarComponent from "../../components/SideBarComponent";


function CreateProduct() {

    const auth = useContext(AuthContext);
    const { state } = auth;
    const { userId } = state;

    const[inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }
    
    async function handleSubmit() {
        const url = 'http://localhost:5000/api/add_product/?name=' + inputs.name + '&seller_id=' + userId + '&price=' + inputs.price + '&quantity=' + inputs.quantity + '&inventory_status=' + (inputs.quantity>0).toString() + '&category=' + inputs.category +'&image=' + inputs.image
        console.log(url)

        await axios.post(
            url, {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                },
            }
        ).then((response) => {
            console.log(response)
        })
    }

    console.log("Hello")

    return (
        <div>
            <div className="columns">
                <div className={"column is-one-fifth"}>
                        <SideBarComponent type={"buyer"}/>
                </div>
            <div className="mt-1 ml-5"> 
            <div className={"container has-text-centered is-size-1 has-text-weight-semibold pt-6 mb-5 "}>
                Create new product listing
            </div>
            <div>
                <div className="columns">
                    <div className="column is-two-thirds">
                    <div className="mb-4">
                        <label> Insert URL of image  
                            <div>
                            <input className="input" type="text" 
                                name="image"
                                value={inputs.image || ""}
                                onChange={handleChange}
                            />
                            </div>
                        </label>
                    </div>
                    <div className="mt-4">
                    <label> Insert category of product 
                        <div>
                        <input className="input" type="text" placeholder="Technology"
                            type="text" 
                            name="category"
                            value={inputs.category || ""}
                            onChange={handleChange}
                        />
                        </div>
                    </label>
                    </div>
                    <div className="mt-4">
                    <label> Enter product description 
                        <div>
                        <input className="input" type="text" placeholder="Savvy laptop device that permits access to the interweb..."
                            type="text"
                            name="description" 
                            value={inputs.description || ""}
                            onChange={handleChange}
                        />
                        </div>
                    </label>
                    </div>
                    </div>

                    <div className="column is-half">
                        <div className="mb-4">
                        <label> Enter product name
                            <div>
                            <input className="input" type="text" placeholder="Macbook Pro"
                                name="name"
                                value={inputs.name}
                                onChange={handleChange}
                            />
                            </div>
                        </label>
                        </div>
                        <div className="mt-4">
                        <label> Enter listing price 
                            <div>
                            <input className="input" type="number" placeholder="$999.99"
                                name="price"
                                value={inputs.price || ""}
                                onChange={handleChange}
                            />
                            </div>
                        </label>
                        </div> 
                        <div className="mt-4">
                            <label> Insert quanity of product 
                                <div>
                                <input className="input" type="number" placeholder="500"
                                    name="quantity"
                                    value={inputs.quantity || ""}
                                    onChange={handleChange}
                                />
                                </div>
                            </label>
                        </div>   
                    </div>
                </div>
                
                <button className={"button mt-5"} onClick={() => handleSubmit()}>
                    Submit
                </button>
            </div>
            </div>
            </div>
        </div>
        
    )
}
export default CreateProduct
// ReactDOM.render(<CreateProduct />, document.getElementById('root'));

