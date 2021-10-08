import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from "./pages/HomePage";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={HomePage} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
