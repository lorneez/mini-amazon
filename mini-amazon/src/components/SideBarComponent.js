import React, {useContext, useState, useEffect} from "react";
import { Link, useHistory } from "react-router-dom";
import {AuthContext} from "../contexts/AuthContext";
import axios from "axios";

const styles = {
    button: {
        marginBottom: '12px',
        marginTop: '12px'
    }
}

function SideBarComponent(props) {
    const history = useHistory();

    const [showModal, setShowModal] = useState(false);
    const [loadingBalance, setLoadingBalance] = useState(true);
    const [balance, setBalance] = useState(0);
    const [fundsToAdd, setFundsToAdd] = useState(0);

    const auth = useContext(AuthContext);
    const { state, dispatch } = auth;
    const { username, isSignedIn, userType, userId } = state;

    const sideBarType = props.type;

    useEffect(async () => {
        const result = await axios(
            'http://127.0.0.1:5000/api/get_balance/?user_id=' + userId, {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                },
            }
        ).then((response) => {
            console.log(response)
            setLoadingBalance(false);
            setBalance(response.data.user_balance)
        })
    }, []);


    const landingPageLinks = [
        {
            route: "/login",
            name: "Login"
        },
        {
            route: "/sign-up",
            name: "Sign Up"
        }
    ]

    const buyerLinks = [
        {
            route: "/dashboard",
            name: "Dashboard"
        },
        {
            route: "/search",
            name: "Search"
        },
        {
            route: "/cart",
            name: "Cart"
        },
        {
            route: "/orders",
            name: "Orders"
        },
        {
            route: "/product/review",
            name: "Product Review"
        },
        {
            route: "/product/create",
            name: "Product Create"
        },
    ]

    const sellerLinks = [
        {
            route: "/seller/dashboard",
            name: "Dashboard"
        },
        {
            route: "/seller/inventory",
            name: "Inventory"
        },
        {
            route: "/seller/orders",
            name: "Orders"
        },
        {
            route: "/seller/reviews",
            name: "Reviews"
        },
        {
            route: "/seller/create-review",
            name: "Create Review"
        },
        {
            route: "/dashboard",
            name: "Go To Buyer"
        }
    ]

    function renderNavigationTitle(label) {
        return (
            <p className="menu-label" style={{color: "white"}}>
                {label}
            </p>
        )
    }

    function renderNavigationLinks(links) {
        return (
            <ul className="menu-list">
                {links.map(function(link, index){
                    return (
                        <li key={index}>
                            <a style={{color: "white"}} href={link.route}>
                                {link.name}
                            </a>
                        </li>
                    )
                })}
            </ul>
        )
    }

    function renderPage() {
        if(userType === "seller") {
            console.log("hello")
            buyerLinks.push({
                route: "/seller/dashboard",
                name: "Go To Seller"
            })
        }
        console.log(sideBarType)
        switch(sideBarType) {
            case "landing":
                return (
                    <div>
                        {renderNavigationTitle("Welcome To Zest!")}
                        {renderNavigationLinks(landingPageLinks)}
                    </div>
                )
            case "buyer":
                return (
                    <div>
                        {renderNavigationTitle("Hello " + username + " !")}
                        {renderNavigationLinks(buyerLinks)}
                    </div>
                )
            case "seller":
                return (
                    <div>
                        {renderNavigationTitle("Hello " + username + " !")}
                        {renderNavigationLinks(sellerLinks)}
                    </div>
                )
            default:
                return (
                    <div>
                        {renderNavigationTitle("Welcome To Zest!")}
                        {renderNavigationLinks(landingPageLinks)}
                    </div>
                )
        }
    }

    async function handleAddFunds() {
        setShowModal(false);
        const result = await axios.post(
            'http://127.0.0.1:5000/api/update_balance/?user_id=' + userId +'&difference=' + fundsToAdd, {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                },
            }
        ).then((response) => {
            console.log(response)
            window.location.reload(false);

        })
    }

    function renderModal() {
        return (
            <div className={"modal " + (showModal ? "is-active" : "")}>
                <div className="modal-background"></div>
                <div className="modal-content">
                    <div className={"container p-6"} style={{background: "white", borderRadius: "5px"}}>
                        <div className="field has-addons">
                            <p className="control">
                                <input className="input" type="number" placeholder="Amount of money" value={fundsToAdd} onChange={(e) => setFundsToAdd(e.target.value)}/>
                            </p>
                            <p className="control">
                                <a className="button is-primary" onClick={() => handleAddFunds()}>
                                    Transfer
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
                <button className="modal-close is-large" aria-label="close" onClick={() => setShowModal(false)}></button>
            </div>
        )
    }

    function handleLogout() {
        dispatch({
            type: "LOGOUT",
            payload: {}
        });

        history.push("/");
    }

    function renderLogout() {
        console.log(isSignedIn)
        if(isSignedIn) {
            if(loadingBalance) {
                return (
                    <div>
                        Loading Your Balance
                    </div>
                )
            }
            else {
                return (
                    <div>
                        <div>
                            You have ${balance}!
                        </div>
                        <div>
                            <button className={"button"} style={styles.button} onClick={() => setShowModal(true)}>
                                Add Funds!
                            </button>
                        </div>
                        <div>
                            <button className="button" style={styles.button} onClick={() => handleLogout()}>Logout</button>
                        </div>
                        {renderModal()}
                    </div>
                )
            }
        }
        else {
            return (
                <div>
                    Please Login to Continue
                </div>
            )
        }
    }

    return (
        <div style={{background: "black", height: "100%"}}>
            <aside className="menu">
                <div className={"p-4"}>
                    {renderPage()}
                </div>
                <div className={"p-4"} style={{color: "white"}}>
                    {renderLogout()}
                </div>
            </aside>
        </div>
    )
}

export default SideBarComponent;