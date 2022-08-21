import React, { useState } from 'react'
import Header from './Header';
import { BigDivCen, Open } from './styles';


export default function HomeCenter() {
    const[openHamburger, setOpenHam] = useState(true);
    const HomeCenter = () => {
      setOpenHam(false);
    }
  
    return (
      <div>
         {openHamburger ?
      <BigDivCen>
          <Open onClick={HomeCenter}>X</Open>  
      </BigDivCen> 
      :
      <Header/>
  }
      </div>
    )
  }
