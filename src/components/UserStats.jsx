import React, { useContext } from 'react';
import {UserDataContext} from '../contexts/UserDataContext';

import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
    background-color: #5252525D;
    display: flex;
    justify-content: space-around;
    padding: 0.5em 0;
    margin: 1.5em;
`;

const Stat = styled.div`
    text-align: center;
`;

const Number = styled.h1`
    font-size: 18pt;
    margin: 0;
`;

const StatName = styled.h2`
    font-size: 8pt;
    font-weight: lighter;
    margin: 0;
`;

const UserStats = props => {

    const { userData } = useContext(UserDataContext);

    return(
        <Wrapper>
            <Stat>
                <Number>{props.userData.followers}</Number>
                <StatName>Seguidores</StatName>
            </Stat>
            <Stat>
                <Number>{props.userData.following}</Number>
                <StatName>Seguindo</StatName>
            </Stat>
            <Stat>
                <Number>{props.userData.public_repos}</Number>
                <StatName>Repos</StatName>
            </Stat>
        </Wrapper>
    );
}

export default UserStats;