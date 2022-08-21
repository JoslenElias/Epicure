import React from 'react'
import styled from 'styled-components';


export const SignatureDish = styled.div`
width: 100%;
text-align:center;
`;

export const SpicyTilte = styled.div`
width: 100%;
align-item:center;
position: absolute;
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 400;
font-size: 70%;
text-transform: uppercase;
`;

export const VegitarianTitle = styled.div`
width: 100%;
align-item:center;
position: absolute;
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 400;
font-size: 70%;
text-transform: uppercase;
`;

export const VeganTitle = styled.div`
width: 100%;
align-item:center;
position: absolute;
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 400;
font-size: 70%;
text-transform: uppercase;
`;

export const SignatureDishTitle = styled.div`
width: 100%;
align-item:center;
position: absolute;
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 400;
font-size: 100%;
text-transform: uppercase;
`;

export const Spicy = styled.img`
width: 10%;
align-item:center;
`;
Spicy.defaultProps = {
    src: 'img/spicy.svg',
};

export const Vegitarian = styled.img`
width: 10%;
align-item:center;
`;
Vegitarian.defaultProps = {
    src: 'img/vegitarian.svg',
};

export const Vegan = styled.img`
width: 10%;
align-item:center;
`;
Vegan.defaultProps = {
    src: 'img/vegan.svg',
};

export const IconImg = styled.img`
width: 10%;
height:10%;
align-item:center;
`;

