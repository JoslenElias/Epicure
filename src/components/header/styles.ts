import React from "react";
import styled from 'styled-components';

// interface Props {
//     windowSize: number
// }

// export const DivCen = styled.button<Props>`
// background:none;
// border:none;
// margin:0;
// padding:0;
// cursor: pointer;
// flex-direction: ${(props) => props.windowSize > 600 ? 'row' : 'column'};
// `;

export const HeaderBox = styled.div`
    width: 100%;
   display: flex;
   justify-content: space-between;
   flex-direction: row;
`;

export const FaBars = styled.div`
    width: 40%;
   disblay:flex;
   justify-content: left;
`;


export const Logo = styled.img`
    width: 7%;
    height: 5%;
    disblay:flex;
    justify-content: center;
    // text-align:center;
`;
Logo.defaultProps = {
    src: './img/1.png',
};

export const RightSide = styled.div`
    width: 20%;
    margin-left:15%;
    disblay:flex;
    justify-content: space-between;
`;

export const Search = styled.img`
width: 30%;
align-item:right;
margin-left: 10%;
`;
Search.defaultProps = {
    src: 'img/search.svg',
};

export const User = styled.img`
width: 30%;
align-item:right;
// display: flex;
justify-content: space-between;
right: 3%;
`;
User.defaultProps = {
    src: 'img/user.svg',
};

export const Bag = styled.img`
width: 30%;
align-item:right;
// display: flex;
justify-content: space-between;
right: 3%;
`;
Bag.defaultProps = {
    src: 'img/bag.svg',
};

export const BigDivHam = styled.div`
`;

export const FooterDiv = styled.div`
`;

export const Close = styled.div`
`;

export const DivCen = styled.div`

`;

export const BigDivCen = styled.div`
`;

export const Open = styled.div`
`;