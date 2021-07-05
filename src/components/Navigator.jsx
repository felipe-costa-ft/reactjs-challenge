import React from 'react';

import styled from 'styled-components';

import { BiHomeAlt } from 'react-icons/bi';
import { FiGithub } from 'react-icons/fi';
import { BsPeople } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Wrapper = styled.nav`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: white;
    padding: 0.5em 0;
    border-radius: 10px 10px 0 0;
`;

const Tab = styled(Link)`
    text-align: center;
    text-decoration: none;
    line-height: 15px;
`;

const TabName = styled.h1`
    font-size: 8pt;
    font-weight: normal;
    margin: 0;
    color: black;
`;

const Navigator = props => {
    return (
        <Wrapper>
            <Tab to="/home">
                <BiHomeAlt color="black" size="1.5em" />
                <TabName>Home</TabName>
            </Tab>
            <Tab to="/repos">
                <FiGithub color="black" size="1.3em" />
                <TabName>Repos</TabName>
            </Tab>
            <Tab to="/followers">
                <BsPeople color="black" size="1.5em" />
                <TabName>Seguidores</TabName>
            </Tab>
            <Tab to="/following">
                <BsPeople color="black" size="1.5em" />
                <TabName>Seguindo</TabName>
            </Tab>
        </Wrapper>
    );
}

export default Navigator;