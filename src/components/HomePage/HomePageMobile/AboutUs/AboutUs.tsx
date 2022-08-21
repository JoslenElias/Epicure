import React from "react";
import {AboutUs1, Logo, AppStore, GooglePlay, Title, Paragraph} from './styles';


export default function HomePage() {
    return (
  <AboutUs1>
      <Logo/>
      <br/>
      <AppStore/>
      <br/>
      <GooglePlay/>
      <br/>


    <Title>ABOUT US:</Title>
    <br/>
    <br/>

    <Paragraph>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus vel justo fermentum bibendum non 
     eu ipsum. Cras porta malesuada eros, eget blandit
      turpis suscipit at.  Vestibulum sed massa in magna sodales porta.  Vivamus elit urna, 
     dignissim a vestibulum.
     
     Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus vel justo fermentum bibendum no
     eu ipsum. Cras porta malesuada eros.
    </Paragraph>
  </AboutUs1>
    )
  }