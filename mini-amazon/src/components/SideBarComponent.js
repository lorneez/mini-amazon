import React, {useContext} from "react";
import { Link } from "react-router-dom";
import {AuthContext} from "../contexts/AuthContext";

function SideBarComponent(props) {
    const auth = useContext(AuthContext);
    const { state } = auth;
    const { username } = state;

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

    return (
        <div style={{background: "black", height: "100vh"}}>
            <aside className="menu">
                <div className={"p-4"}>
                    {renderPage()}
                </div>
            </aside>
        </div>
    )
}

export default SideBarComponent;