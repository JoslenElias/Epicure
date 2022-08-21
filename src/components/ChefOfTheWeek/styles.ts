import React from "react";
import styled from 'styled-components';

export const ChefWeek = styled.div`
font-size:100%;
font-style: bold;
// text-align:center;
`;

export const Title = styled.div`
width:50%;
justify-centent:center;
`;

export const ChefOfTheWeekTitle = styled.div`
margin-left:10%;
width: 100%;
hight: 10%;
// font-size:larger;
// justify-centent:center;
`;

export const Yossi = styled.div`
`;

export const ParagraphTitle = styled.div`
justify-centent:center;
`;

export const YossiImg = styled.img`
width:50%;
// align-item:left;
justify-centent:center;
`;
YossiImg.defaultProps = {
    src: 'img/yossi.svg',
};