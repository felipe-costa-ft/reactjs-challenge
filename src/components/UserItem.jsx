import React from 'react';

import TitleDecoration from './TitleDecoration';

import styled from 'styled-components';
import { FaRegStar } from 'react-icons/fa';
import { BiLockAlt, BiLockOpenAlt } from 'react-icons/bi';
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom';

const UserLink = styled(Link)`
    text-decoration: none;
    color: white;
`;

const Item = styled.li`
    margin: 0 0.8em;
    list-style: none;
    border-bottom: 1px solid #969696;
    padding: 1em 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const UserAvatar = styled.img`
    width: 2.5em;
    height: 2.5em;
    border-radius: 50%;
    border: 3px solid white;
`;

const AvatarWrap = styled.div`
    display: flex;
    align-items: center;
`;

const Username = styled.h1`
    font-size: 10pt;
    font-weight: bold;
`;

const UserItem = props => {
    return (
        <UserLink to={`user/${props.login}`}>
            <Item>
                <AvatarWrap>
                    <TitleDecoration />
                    <UserAvatar src={props.avatar} />
                </AvatarWrap>
                <Username>#{props.login}</Username>
                <FaArrowRight color="white" />
            </Item>
        </UserLink>
    );
}

export default UserItem;