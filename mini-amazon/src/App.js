import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import ProductBrowse from "./pages/product/ProductBrowse";
import ProductDetails from "./pages/product/ProductDetails";
import ProductReview from "./pages/product/ProductReview";
import CreateProduct from "./pages/product/CreateProduct";
import BuyerDashboard from "./pages/buyer/BuyerDashboard";
import Cart from "./pages/buyer/Cart";
import Orders from "./pages/buyer/Orders";
import Search from "./pages/buyer/Search";


function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/product/browse" exact component={ProductBrowse} />
                <Route path="/product/details" exact component={ProductDetails} />
                <Route path="/product/review" exact component={ProductReview} />
                <Route path="/product/create" exact component={CreateProduct} />
                <Route path="/dashboard" exact component={BuyerDashboard} />
                <Route path="/orders" exact component={Orders} />
                <Route path="/search" exact component={Search} />
                <Route path="/cart" exact component={Cart} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
