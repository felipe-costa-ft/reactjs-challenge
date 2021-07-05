import React, {useContext, useEffect} from 'react';


import styled from 'styled-components';

import {UserDataContext} from '../contexts/UserDataContext';

import {BiExit} from 'react-icons/bi'
import {Link, Redirect, useHistory} from 'react-router-dom';

const Wrapper = styled.div`
    padding-top: 0.7em;
    height: 5em;
    display: flex;
    width: 100%;
    background-color: #1F1F1F;
    justify-content: space-between;
    align-items: flex-start;
`;

const Username = styled.h1`
    margin: 0 0.5em;
    font-size: 10pt;
    color: white;
`;

const ExitButton = styled.button`
    background: none;
    border: none;
    color: white;
    margin-right: 1em;
    display: flex;
    align-items: center;
    gap: 0.3em;
    text-decoration: none;
    cursor: pointer;

`;

const VisitingHeader = props => {

    const {userData, setUserData} = useContext(UserDataContext);
    const {authenticated, setAuthenticated} = useContext(UserDataContext);

    const history = useHistory();

    function save() {
        setUserData(props.actual);
        history.push('/home');
    }

    useEffect(() => {
        if(!authenticated) history.push('/');
    });

    return (
        <Wrapper>
            <Username>#{props.login}</Username>
            <ExitButton onClick={save} >Salvar<BiExit color="#5CBC29" size="1.5em"/></ExitButton>
        </Wrapper>
    );
}

export default VisitingHeader;