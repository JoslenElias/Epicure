import React from "react";
import styled from 'styled-components';

interface Props {
    windowSize: number
}

export const FooterContainer = styled.div<Props>`
    display: flex;
    // gap: 20px;
    flex-direction: ${(props) => props.windowSize > 600 ? 'row' : 'column'};
`

export const FooterElement = styled.div`
font-color:black;
text-align:left;
font-family:'Helvetica Neue';
font-size:100%;
font-style: bold;
font-weight:200;
`;

export const FooterElements = styled.button<Props>`
background:none;
border:none;
margin:0;
padding:0;
cursor: pointer;
flex-direction: ${(props) => props.windowSize > 600 ? 'row' : 'column'};
`;