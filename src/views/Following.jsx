import React, {useContext, useEffect} from 'react';
import Navigator from '../components/Navigator';
import ListHeader from '../components/ListHeader';
import {UserDataContext} from '../contexts/UserDataContext';
import UsersList from '../components/UsersList';
import { useHistory } from 'react-router';


const Following = props => {

    const {userData} = useContext(UserDataContext);
    const {authenticated} = useContext(UserDataContext);

    const history = useHistory();


    useEffect(() => {
        if(!authenticated) history.push('/');
    });


    return(
        <React.Fragment>
            <ListHeader >{userData.following} seguindo</ListHeader>
            <UsersList url={`https://api.github.com/users/${userData.login}/following`} />
            <Navigator />
        </React.Fragment>
    );
}

export default Following;