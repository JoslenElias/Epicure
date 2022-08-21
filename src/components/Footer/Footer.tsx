import React, { useState } from 'react'
// import Contact from './Contact_Us';
import {FooterContainer, FooterElement, FooterElements} from './styles';
 import SetWindowSize from '../helpers/setWindowSize';
import { Navigate, useNavigate } from 'react-router-dom';

export default function Footer() {
const Navigate = useNavigate();
const windowSize = SetWindowSize();
const [contactUs, setContactUs] = useState('Contact Us');
const [termOfUse, setTermOfUse] = useState('Term Of Use');
const [privacy, setPrivacy] = useState('Privacy Policy');

 const onBottunClicked=() => {
  Navigate('/ContactUS');
 }

   return (
    <FooterContainer windowSize={windowSize}>
      <FooterElements windowSize={windowSize}>
          <FooterElement onClick={onBottunClicked}>{contactUs}</FooterElement>
          <br/>
          <FooterElement>{termOfUse}</FooterElement>
          <br/>
          <FooterElement>{privacy}</FooterElement>
          <br/>
      </FooterElements>
    </FooterContainer>
   )
 }


