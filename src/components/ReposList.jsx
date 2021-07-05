import React, { useContext, useEffect, useState } from 'react';
import { UserDataContext } from '../contexts/UserDataContext';
import axios from 'axios';
import styled from 'styled-components';

import RepoItem from './RepoItem';
import { useHistory } from 'react-router';

const Wrapper = styled.ul`
    width: 100%;
    padding-left: 0;
`;

const ReposList = props => {

    const { userData } = useContext(UserDataContext);
    const { authenticated } = useContext(UserDataContext);
    const [repoList, setRepoList] = useState();

    const history = useHistory();

    useEffect(() => {

        if(!authenticated){ 
            history.push('/home');
            return;
        };
        async function getRepos() {
            const repos = await axios.get(userData.repos_url);
            console.log(repos);
            setRepoList(repos.data.map((repo) =>
                <RepoItem
                    key={repo.id}
                    name={repo.name}
                    description={repo.description}
                    stars={repo.stargazers_count}
                     />
            ));
        }

        getRepos();
    });

    return (
        <Wrapper>
            {repoList}
        </Wrapper>
    );
}

export default ReposList;