import React from "react";
import styled from 'styled-components';

// interface Props {
//     // windowSize: number
// }

 export const Restaurant = styled.div`
 width:100%;
 `;

export const RestaurantsContainer = styled.div`
`;

export const AllRestaurantsTitle = styled.div`
font-color:black;
font-family:'Helvetica Neue';
font-style: bold;
font-weight:200;
left: 8%;
background:none;
border:none;
margin:0;
padding:0;
cursor: pointer;
display: flex;
//  image:Url('img/4.svg');
margin-left:10%;
`;

export const Vector = styled.img`
width: 5%;
margin-left:5%;
disblay:flex;
justify-content: space-between;
`;
Vector.defaultProps = {
    src: 'img/vector.svg',
};

export const AllRes = styled.div`
display: flex;
`;