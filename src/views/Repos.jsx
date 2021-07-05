import React, {useContext, useEffect} from 'react';
import Navigator from '../components/Navigator';
import ListHeader from '../components/ListHeader';
import {UserDataContext} from '../contexts/UserDataContext';
import ReposList from '../components/ReposList';
import { useHistory } from 'react-router';


const Repos = props => {

    const {userData} = useContext(UserDataContext);
    const {authenticated} = useContext(UserDataContext);

    const history = useHistory();


    useEffect(() => {
        if(!authenticated) history.push('/');
    });


    return(
        <React.Fragment>
            <ListHeader >{userData.public_repos} repositórios</ListHeader>
            <ReposList />
            <Navigator />
        </React.Fragment>
    );
}

export default Repos;