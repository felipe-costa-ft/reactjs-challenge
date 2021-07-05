import React, { useContext } from 'react';
import AppHeader from '../components/AppHeader';
import UserData from '../components/UserData';
import Navigator from '../components/Navigator';

import {UserDataContext} from '../contexts/UserDataContext';



const Home = props => {

    const { userData } = useContext(UserDataContext);

    return(
        <React.Fragment>
            <AppHeader/>
            <UserData userData={ userData }/>
            <Navigator />
        </React.Fragment>
    );
}

export default Home;