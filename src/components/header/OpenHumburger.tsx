import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer';
import { Close, FooterDiv } from './styles';
import Header from './Header';
import { BigDivHam} from './styles';
import { FooterElement } from '../Footer/styles';


export default function OpenHumburger() {
  const[openHamburger, setOpenHam] = useState(true);
  const ColseHamburger = () => {
    setOpenHam(false);
  }

    const navigate = useNavigate();
    const NavToAllRestaurants = () => {navigate('/AllResturants')}
  return (
    <div>
       {openHamburger ?
    <BigDivHam>
        <Close onClick={ColseHamburger}>X</Close>  
    <FooterDiv>
      <br/>
        <FooterElement onClick={NavToAllRestaurants}> Restaurants </FooterElement>
        <FooterElement> Chefs </FooterElement>
        <br/>
        <br/>
    </FooterDiv>
   <Footer/>
    </BigDivHam> 
    :
    <Header/>
}
    </div>
  )
}
