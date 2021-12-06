import React, {useState, useContext} from "react"
import { useHistory } from "react-router-dom";
import './Style.css';
import SideBarComponent from "../../components/SideBarComponent";
import {AuthContext} from "../../contexts/AuthContext";
import PasswordInput from "../../components/PasswordInput";
import axios from "axios";

function SignUpPage() {
    const history = useHistory();

    const auth = useContext(AuthContext);
    const { dispatch } = auth;

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [isSeller, setIsSeller] = useState(false)


    async function handleSubmit() {

        await axios.post(
            'http://localhost:5000/api/create_user/?email=' + email + '&password=' + password + '&name=' + name + '&address=' + address + '&is_seller=' + isSeller? "true":"false", {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                },
            }
        ).then((response) => {
            console.log(response)
        })

        history.push("/login");
    }

    function changeIsSeller(e) {
        setIsSeller(e.target.checked)
    }

    return (
        <div>
            <div className={"columns center"}>
                <div className={"column is-one-fifth"}>
                    <SideBarComponent type={"landing"}/>
                </div>
                <div className={"column center"}>
                <flexbox className={"is-align-items-end"}>
                    <div className={"container "}>
                        Sign Up Page
                        <div style={{width: 400}}>
                            <input className="input is-primary"  value={name} type="text" placeholder="Name"
                                   onChange={(e)=>setName(e.target.value)}
                            />
                            <label className="checkbox">
                                <input type="checkbox" value={isSeller} onChange={(e) => changeIsSeller(e)}/>
                                Check this box if you want to sign up as a seller as well!
                            </label>
                            <input className="input is-primary"  value={email} type="text" placeholder="Email"
                                   onChange={(e)=>setEmail(e.target.value)}
                            />
                            <input className="input is-primary"  value={address} type="text" placeholder="Address"
                                   onChange={(e)=>setAddress(e.target.value)}
                            />
                            <PasswordInput value = {password}/>
                            {/* <input className="input is-primary" value={password} type="text" placeholder="Password"
                                   onChange={(e)=>setPassword(e.target.value)}
                            /> */}

                            <button className="button landingbutton" onClick={() => handleSubmit()}>Sign Up</button>

                        </div>
                    </div>
                </flexbox>
                </div>
            </div>
        </div>
    )
}



export default SignUpPage;