import React from "react";
import { Link, Redirect } from "react-router-dom";

function SideBarComponent(props) {
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
                            <Linkgi style={{color: "white"}} to={link.route}>
                                {link.name}
                            </Linkgi>
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
                        {renderNavigationTitle("Buyer!")}
                        {renderNavigationLinks(buyerLinks)}
                    </div>
                )
            case "seller":
                return (
                    <div>
                        {renderNavigationTitle("Seller!")}
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