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
            </Switch>
        </BrowserRouter>
    );
}

export default App;
