import React, { useContext, useEffect, useState } from 'react';
import { UserDataContext } from '../contexts/UserDataContext';
import axios from 'axios';
import styled from 'styled-components';

import UserItem from './UserItem';
import { useHistory } from 'react-router';

const Wrapper = styled.ul`
    width: 100%;
    padding-left: 0;
`;

const ReposList = props => {

    const { userData } = useContext(UserDataContext);
    const { authenticated } = useContext(UserDataContext);
    const [usersList, setUsersList] = useState();

    const history = useHistory();

    useEffect(() => {

        if (!authenticated) {
            history.push('/home');
            return;
        };
        async function getRepos() {
            const users = await axios.get(props.url);
            setUsersList(users.data.map((user) => {
                return <UserItem avatar={user.avatar_url} login={user.login} />
            }));
        }

        getRepos();
    });

    return (
        <Wrapper>
            {usersList}
        </Wrapper>
    );
}

export default ReposList;