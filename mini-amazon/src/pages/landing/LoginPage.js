import React, {useState, useContext} from "react"
import { useHistory } from "react-router-dom";
import './Style.css';
import SideBarComponent from "../../components/SideBarComponent";
import {AuthContext} from "../../contexts/AuthContext";
import PasswordInput from "../../components/PasswordInput";
import axios from "axios";

function LoginPage() {
    const history = useHistory();

    const auth = useContext(AuthContext);
    const { dispatch } = auth;

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    async function handleSubmit() {
        console.log(username, password)

        const result = await axios.post(
            'http://localhost:5000/api/user_login/?email=' + username + '&password=' + password, {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                },
            }
        ).then((response) => {
            console.log(response.data)
            // response.data.login_status
            if(true) {
                dispatch({
                    type: "LOGIN",
                    payload: {
                        isSignedIn: true,
                        username: username,
                        userType: (response.data.is_seller ? "seller" : "buyer"),
                        userId: response.data.uid,
                        token: response.data.auth_token,
                        expireDate: Math.floor(new Date().getTime() / 1000 + 2000) // response.data.expir
                    }
                });
                history.push("/dashboard");
            }
            else {
                console.log("invalid auth")
            }
        })
    }

    return (
        <div>
            <div className={"columns center"}>
                <div className={"column is-one-fifth"}>
                    <SideBarComponent type={"landing"}/>
                </div>
                <div className={"column center"}>
                    <flexbox className={"is-align-items-end"}>
                    <div className={"container"}>
                        Login Page
                        <div style={{width: 400}}>
                            <input className="input is-primary"  value={username} type="text" placeholder="Username"
                                   onChange={(e)=>setUsername(e.target.value)}
                            />
                            <PasswordInput value = {password}/>
                            <button className="button landingbutton" onClick={() => handleSubmit()}>Login</button>
                        </div>
                    </div>
                    </flexbox>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;