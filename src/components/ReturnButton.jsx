import React from 'react';
import { Link } from 'react-router-dom';

import {FaArrowLeft} from 'react-icons/fa'

import styled from 'styled-components';

const Button = styled(Link)`
`;

const ReturnButton = props => {
    return (
        <Button to="/home"><FaArrowLeft color="white"/></Button>
    );
}

export default ReturnButton;