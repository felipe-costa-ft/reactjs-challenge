import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom';

import styled from 'styled-components';

import UserDataProvider from './contexts/UserDataContext';
import {UserDataContext} from './contexts/UserDataContext';

import Login from './views/Login';
import Home from './views/Home';

import axios from 'axios';
import Repos from './views/Repos';
import Followers from './views/Followers';
import Following from './views/Following';
import UserPage from './views/UserPage';

const Wrapper = styled.div`
    background-color: #292929;
    margin: 0 auto;
    width: 15rem;
    overflow-y: visible;
`;

const App = props => {

    const [userData, setData] = useState('');

    return (
        <UserDataProvider>
            <Wrapper>
                <Router>
                    <Switch>
                        <Route exact path="/">
                            <Login />
                        </Route>
                        <Route path="/home">
                            <Home />
                        </Route>
                        <Route path="/repos">
                            <Repos />
                        </Route>
                        <Route path="/followers">
                            <Followers />
                        </Route>
                        <Route path="/following">
                            <Following />
                        </Route>
                        <Route path="/user/:login">
                            <UserPage />
                        </Route>
                    </Switch>
                </Router>
            </Wrapper>
        </UserDataProvider>
    );
}

export default App;