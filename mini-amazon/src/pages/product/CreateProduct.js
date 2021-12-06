import React from "react"
import { useState } from "react";

function CreateProduct() {
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

    console.log("Hello")

    return (
        <div class="mt-5 ml-5">
            <div className={"rows"}>]
            <div className="row">
            <form onSubmit={handleSubmit}>
                <label is-fullwidth> Enter product name
                    <input 
                        type="text" 
                        name="name"
                        value={inputs.name}
                        onChange={handleChange}
                        // dataValidation="not-blank"
                    />
                </label>
                <label> Enter listing price 
                    <input 
                        type="text" 
                        name="price"
                        value={inputs.price || ""}
                        onChange={handleChange}
                    />
                </label>
                <label> Enter product description 
                    <input 
                        type="text"
                        name="description" 
                        value={inputs.description || ""}
                        onChange={handleChange}
                    />
                </label>
                <label> Insert image of product 
                    <input 
                        type="text" 
                        name="image"
                        value={inputs.image || ""}
                        onChange={handleChange}
                    />
                </label>
                <input type="submit" value="Submit"/>
            </form>
            </div>
            </div>
        </div>
        
    )
}
export default CreateProduct
// ReactDOM.render(<CreateProduct />, document.getElementById('root'));

