import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
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
import ProtectedRoute from "./components/protected/ProtectedRoute";
import { AuthStore } from './contexts/AuthContext';


function App() {
    return (
        <AuthStore>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={LandingPage} />
                    <Route path="/login" exact component={LoginPage} />
                    <Route path="/sign-up" exact component={SignUpPage} />
                    <ProtectedRoute path="/product/browse" exact component={ProductBrowse} />
                    <ProtectedRoute path="/product/details" exact component={ProductDetails} />
                    <ProtectedRoute path="/product/review" exact component={ProductReview} />
                    <ProtectedRoute path="/product/create" exact component={CreateProduct} />
                    <ProtectedRoute path="/dashboard" exact component={BuyerDashboard} />
                    <ProtectedRoute path="/orders" exact component={Orders} />
                    <ProtectedRoute path="/search" exact component={Search} />
                    <ProtectedRoute path="/cart" exact component={Cart} />
                    <ProtectedRoute path="/seller/dashboard" exact component={SellerDashboard} />
                    <ProtectedRoute path="/seller/inventory" exact component={Inventory} />
                    <ProtectedRoute path="/seller/orders" exact component={SellerOrders} />
                    <ProtectedRoute path="/seller/reviews" exact component={Reviews} />
                </Switch>
            </BrowserRouter>
        </AuthStore>
    );
}

export default App;
