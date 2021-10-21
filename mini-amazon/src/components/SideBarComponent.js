import React, {useContext} from "react";
import { Link, useHistory } from "react-router-dom";
import {AuthContext} from "../contexts/AuthContext";

function SideBarComponent(props) {
    const history = useHistory();

    const auth = useContext(AuthContext);
    const { state, dispatch } = auth;
    const { username, isSignedIn } = state;

    const sideBarType = props.type;

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
        }
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
                            <Link style={{color: "white"}} to={link.route}>
                                {link.name}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        )
    }

    function renderPage() {
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

    function handleLogout() {
        dispatch({
            type: "LOGOUT",
            payload: {}
        });

        history.push("/");
    }

    function renderLogout() {
        if(isSignedIn) {
            return (
                <div>
                    <button className="button" onClick={() => handleLogout()}>Logout</button>
                </div>
            )
        }
        else {
            return (
                <div>
                    Login pls
                </div>
            )
        }
    }

    return (
        <div style={{background: "black", height: "100vh"}}>
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