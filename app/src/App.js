import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';

import Login from './pages/Login';
import Chat from './pages/Chat';

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={Login} />
            <Route path="/chat" component={Chat} />
        </Switch>
    </BrowserRouter>
);

export default App;