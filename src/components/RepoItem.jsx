import React from 'react';

import TitleDecoration from './TitleDecoration';

import styled from 'styled-components';
import { FaRegStar } from 'react-icons/fa';
import { BiLockAlt, BiLockOpenAlt } from 'react-icons/bi'

const Item = styled.li`
    list-style: none;
    border-bottom: 1px solid #969696;
    padding: 1em 0;
`;

const RepoName = styled.h1`
    font-size: 12pt;
    margin-left: 0.75em;
    margin-bottom: 3px;
    width: 90%;
`;

const Description = styled.p`
    font-size: 8pt;
    line-height: 15px;
    font-weight: lighter;
    margin-left: 0.5em;
`;

const Number = styled.p`
    font-size: 8pt;
    margin: 0;
`;

const Stats = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Stars = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    margin-left: 0.5em;
`;
const Lockers = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    margin-right: 1em;
`;

const RepoItem = props => {
    return (
        <Item>
            <RepoName><TitleDecoration />{props.name}</RepoName>
            <Description>{props.description}</Description>
            <Stats>
                <Stars>
                    <FaRegStar color="#FFCE00" />
                    <Number>{props.stars}</Number>
                </Stars>
                <Lockers>
                    <BiLockOpenAlt color="#63BF1F" />
                    <BiLockAlt color="#CC042A" />
                </Lockers>
            </Stats>
        </Item>
    );
}

export default RepoItem;