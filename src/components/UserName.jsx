import React, { useContext } from 'react';
import {UserDataContext} from '../contexts/UserDataContext';

import styled from 'styled-components';
import TitleDecoration from './TitleDecoration';

const Wrapper = styled.div`
    width: 100%;
    margin-left: 2em;
`;

const User = styled.h1`
    font-size: 16pt;
    margin-bottom: 3px;
    width: 90%;
`; 

const Info = styled.h2`
    font-size: 8pt;
    line-height: 15px;
    margin: 0;
    font-weight: lighter;
`;

const UserName = props => {

    const { userData } = useContext(UserDataContext);

    return(
        <Wrapper>
            <User><TitleDecoration />{props.name}</User>
            <Info>{props.email}</Info>
            <Info>{props.location}</Info>
        </Wrapper>
    );
}

export default UserName;