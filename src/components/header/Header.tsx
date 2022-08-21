import React, { useState } from 'react'
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import { faBars} from '@fortawesome/free-solid-svg-icons'
import {FaBars, HeaderBox, Logo, RightSide, Search, User, Bag, DivCen} from './styles';
import OpenHumburger from './OpenHumburger';
import HomePage from '../HomePage/HomePage';

export default function Header() {

  const[openHamburger, setOpenHam] = useState(false);
  const toggleHamburger = () => {
    setOpenHam(!openHamburger);
  }

  const[openCenter, setCen] = useState(false);
  const center = () => {
    setCen(!openCenter);
  }

  return (
    <div>
    {!openHamburger ? 
      <HeaderBox>
      <FaBars>
           <button onClick={toggleHamburger}> <FontAwesomeIcon icon={faBars}/> </button>
      </FaBars> 

      {/* <DivCen> */}
      {/* <button onClick={center}> */}
      <Logo/>
      {/* </button> */}
      {/* </DivCen> */}

      <RightSide >
          <Search/>
          <User/>
          <Bag/>
      </RightSide> 
  
      </HeaderBox>
      : 
      <OpenHumburger/>
    }
    </div>
  )
}



