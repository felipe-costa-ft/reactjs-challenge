import React, { useContext, useEffect, useState } from 'react';

import styled from 'styled-components';

import {UserDataContext} from '../contexts/UserDataContext';

import { FaArrowRight } from 'react-icons/fa';
import {VscGithubInverted} from 'react-icons/vsc';
import { useHistory } from 'react-router';


const Input = styled.input`
    padding: 0.7em;
    border-radius: 7px;
    border: none;
    color: dimgrey;
    width: 100%;
`;

const Button = styled.button`
    display: flex;
    margin: 1em 0;
    background-color: #ffce00;
    font-weight: bold;
    border: none;
    width: 110%;
    padding: 0.7em;
    border-radius: 7px;
    gap: 10px;
    justify-content: center;
    cursor: pointer;
 
`;

const LoginArea = styled.div`
    height: 32rem;
    padding: 0 1.1em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Logo = styled.div`
    margin: 1.5em auto;
`;

const Message = styled.p`
    height: 2vh;
    color: #EB2D2D;
    font-size: 8pt;
    position: relative;
    top: -8.7em;
    left: 5em;
`;

const Hide = props => {

    return <Message>{props.show}</Message>
    
}

const Login = props => {

    const {authenticated} = useContext(UserDataContext);
    const {getUserData} = useContext(UserDataContext);
    const [username, setUsername] = useState('');
    const [show, setShow] = useState('');

    const history = useHistory();


    useEffect(() => {

        if(authenticated) history.push('/home');
    });


    function handleChange(e) {
        setUsername(e.target.value);
    }

    function handleClick() {
        if(username === '') {
            setShow('Campo obrigatório');
            return;
        }
        getUserData(username);
    }

    return (

        <LoginArea>
            <Logo>
                <VscGithubInverted color="#ffce00" size="4em" />
            </Logo>
            <Input value={username} onChange={(e) => handleChange(e)} placeholder="Usuário"></Input>
            <Button onClick={handleClick}>ENTRAR<FaArrowRight color="black"/></Button>
            <Hide show={show}/>
        </LoginArea>
    );
}

export default Login;