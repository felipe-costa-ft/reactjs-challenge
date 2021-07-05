import React, {useContext, useEffect} from 'react';
import Navigator from '../components/Navigator';
import ListHeader from '../components/ListHeader';
import {UserDataContext} from '../contexts/UserDataContext';
import UsersList from '../components/UsersList';
import { useHistory } from 'react-router';


const Followers = props => {

    const {userData} = useContext(UserDataContext);
    const {authenticated} = useContext(UserDataContext);

    const history = useHistory();


    useEffect(() => {
        if(!authenticated) history.push('/');
    });


    return(
        <React.Fragment>
            <ListHeader >{userData.followers} seguidores</ListHeader>
            <UsersList url={userData.followers_url}/>
            <Navigator />
        </React.Fragment>
    );
}

export default Followers;