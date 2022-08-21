import React from 'react'
import {SignatureDish, Spicy, Vegan, Vegitarian, SignatureDishTitle, SpicyTilte, VegitarianTitle, VeganTitle} from './styles';


export default function SignatureDishOf() {


  return (
    <SignatureDish>
      <SignatureDishTitle> SIGNATURE DISH OF:</SignatureDishTitle>
      <br/>
      <br/> 
      
          <Spicy/>
       <SpicyTilte> Spicy</SpicyTilte> 
       <br/>
       <br/> 
       <br/> 

        <Vegitarian/>
       <VegitarianTitle>Vegitarian</VegitarianTitle>
       <br/> 
       <br/> 
       <br/> 

        <Vegan/>
       <VeganTitle>Vegan</VeganTitle> 
       <br/>
       <br/>
       <br/>
       <br/> 

    </SignatureDish>
  )
}
