import React from 'react';


import styled from 'styled-components';

import ReturnButton from './ReturnButton';

const Wrapper = styled.div`
    background-color: #1F1F1F;
    padding: 1em 0.5em;
    display: flex;
    align-items: center;    
`;

const Title = styled.h1`
    font-size: 14px;
    margin: 0 auto;
`;

const ListHeader = props => {

    return(
        <Wrapper>
            <ReturnButton />
            <Title>{props.children}</Title>
        </Wrapper>
    );
}

export default ListHeader;