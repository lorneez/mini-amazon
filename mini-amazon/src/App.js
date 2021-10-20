import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import ProductBrowse from "./pages/product/ProductBrowse";
import ProductDetails from "./pages/product/ProductDetails";
import ProductReview from "./pages/product/ProductReview";
import CreateProduct from "./pages/product/CreateProduct";
import SignUpPage from "./pages/landing/SignUpPage";
import LoginPage from "./pages/landing/LoginPage";
import LandingPage from "./pages/landing/LandingPage";
import BuyerDashboard from "./pages/buyer/BuyerDashboard";
import Cart from "./pages/buyer/Cart";
import Orders from "./pages/buyer/Orders";
import Search from "./pages/buyer/Search";
import SellerDashboard from "./pages/seller/SellerDashboard";
import Reviews from "./pages/seller/Reviews";
import SellerOrders from "./pages/seller/SellerOrders";
import Inventory from "./pages/seller/Inventory";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={LandingPage} />
                <Route path="/login" exact component={LoginPage} />
                <Route path="/sign-up" exact component={SignUpPage} />
                <Route path="/product/browse" exact component={ProductBrowse} />
                <Route path="/product/details" exact component={ProductDetails} />
                <Route path="/product/review" exact component={ProductReview} />
                <Route path="/product/create" exact component={CreateProduct} />
                <Route path="/dashboard" exact component={BuyerDashboard} />
                <Route path="/orders" exact component={Orders} />
                <Route path="/search" exact component={Search} />
                <Route path="/cart" exact component={Cart} />
                <Route path="/seller/dashboard" exact component={SellerDashboard} />
                <Route path="/seller/inventory" exact component={Inventory} />
                <Route path="/seller/orders" exact component={SellerOrders} />
                <Route path="/seller/reviews" exact component={Reviews} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
