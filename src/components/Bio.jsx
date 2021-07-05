import React, { useContext } from 'react';
import {UserDataContext} from '../contexts/UserDataContext';

import styled from 'styled-components';
import TitleDecoration from './TitleDecoration';

const Wrapper = styled.div`
    width: 100%;
    margin-left: 2em;
`;

const Title = styled.h1`
    font-size: 16pt;
    margin: 0;
    margin-bottom: 0;
`; 

const Content = styled.p`
    font-weight: lighter;
    font-size: 8pt;
    line-height: 15px;
    width: 90%;
    margin-top: 0.5em;
    margin-bottom: 6em;
`;

const Bio = props => {

    const { userData } = useContext(UserDataContext);

    return(
        <Wrapper>
            <Title><TitleDecoration/>Bio</Title>
            <Content>{props.userData.bio}</Content>
        </Wrapper>
    );
}

export default Bio;