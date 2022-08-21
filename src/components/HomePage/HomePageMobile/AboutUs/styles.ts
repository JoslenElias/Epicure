import React from "react";
import styled from 'styled-components';

export const AboutUs1 = styled.div`
`;

export const Logo = styled.img`
width: 30%;
align-item:left;
left: 3%;
`;
Logo.defaultProps = {
    src: './img/1.png',
};


export const AppStore = styled.img`
width: 30%;
align-item:left;
// display: flex;
// justify-content: space-between;
left: 3%;
`;
AppStore.defaultProps = {
    src: 'img/2.png',
};

export const GooglePlay = styled.img`
width: 30%;
align-item:left;
left: 3%;
`;
GooglePlay.defaultProps = {
    src: './img/3.png',
};

export const Title = styled.h3`
text-align: left;
width: 100%;
align-item:center;
position: absolute;
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 400;
font-size: 100%;
text-transform: uppercase;
font-size: larger;
`;

export const Paragraph = styled.p`
width: 100%;
text-align: left;
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 400;
font-size: 100%;
font-size: large;
`;
