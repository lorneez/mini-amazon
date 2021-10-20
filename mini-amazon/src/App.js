import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import ProductBrowse from "./pages/product/ProductBrowse";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/product/browse" exact component={ProductBrowse} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
