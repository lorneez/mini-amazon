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

    function handleSubmit(event) {
        event.preventDefault();
        console.log(inputs.name)
    }

    async function handleSubmit() {

        await axios.post(
            'http://localhost:5000/api/add_product/?name=' + inputs.name + '&seller_id=' + userId + '&price=' + inputs.price + '&quantity=' + inputs.quantity,'&inventory_status=' + (inputs.quantity>0), '&category=' + inputs.category,'&image=' + inputs.image, {
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
            <div class="mt-1 ml-5"> 
            <div className={"container has-text-centered is-size-1 has-text-weight-semibold pt-6 mb-5 "}>
                Create new product listing
            </div>
            <form onSubmit={handleSubmit}>
                <div className="columns">
                    <div class="column is-two-thirds">
                    <div class="mb-4">
                        <label> Insert image of product 
                            <div>
                            <input 
                                type="file" 
                                name="image"
                                value={inputs.image || ""}
                                onChange={handleChange}
                            />
                            </div>
                        </label>
                    </div>
                    </div>

                    <div class="column is-half">
                        <div class="mb-4">
                        <label> Enter product name
                            <div>
                            <input class="input" type="text" placeholder="Macbook Pro"
                                type="text" 
                                name="name"
                                value={inputs.name}
                                onChange={handleChange}
                            />
                            </div>
                        </label>
                        </div>
                        <div class="mt-4">
                        <label> Enter listing price 
                            <div>
                            <input class="input" type="text" placeholder="$999.99"
                                type="text" 
                                name="price"
                                value={inputs.price || ""}
                                onChange={handleChange}
                            />
                            </div>
                        </label>
                        </div> 
                        <div class="mt-4">
                            <label> Insert quanity of product 
                                <div>
                                <input class="input" type="text" placeholder="500"
                                    type="text" 
                                    name="quantity"
                                    value={inputs.quantity || ""}
                                    onChange={handleChange}
                                />
                                </div>
                            </label>
                        </div>   
                    </div>
                </div>
                <div class="mt-4">
                    <label> Enter product description 
                        <div>
                        <input class="input" type="text" placeholder="Savvy laptop device that permits access to the interweb..."
                            type="text"
                            name="description" 
                            value={inputs.description || ""}
                            onChange={handleChange}
                        />
                        </div>
                    </label>
                </div>
                <div class="mt-4 mb-5">
                    <label> Insert category of product 
                        <div>
                        <input class="input" type="text" placeholder="Technology"
                            type="text" 
                            name="category"
                            value={inputs.category || ""}
                            onChange={handleChange}
                        />
                        </div>
                    </label>
                </div>
                <input type="submit" value="Submit"/>
            </form>
            </div>
            </div>
        </div>
        
    )
}
export default CreateProduct
// ReactDOM.render(<CreateProduct />, document.getElementById('root'));

