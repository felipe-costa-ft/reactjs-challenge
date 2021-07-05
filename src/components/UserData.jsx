import React from 'react';
import Avatar from '../components/Avatar';
import UserName from '../components/UserName';
import UserStats from '../components/UserStats';

import styled from 'styled-components';
import Bio from './Bio';

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const UserData = props => {
    return (
        <Wrapper>
            <Avatar avatar={props.userData.avatar_url} />
            <UserName
                name={props.userData.name}
                email={props.userData.email}
                location={props.userData.location}
            />
            <UserStats userData={ props.userData }/>
            <Bio userData={ props.userData }/>
        </Wrapper>
    );
}

export default UserData;