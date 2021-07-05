import React, { useContext } from 'react';
import {UserDataContext} from '../contexts/UserDataContext';


import styled from 'styled-components';

const Picture = styled.img`
    border-radius: 50%;
    width: 5em;
    border: 3px solid white;
    position: relative;
    top: -3em;
    margin-bottom: -2.5em;
`;

const Avatar = props => {

    const { userData } = useContext(UserDataContext);

    return (
        <Picture src={props.avatar} alt="" />
    );
}

export default Avatar;