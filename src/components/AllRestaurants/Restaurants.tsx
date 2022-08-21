import React from 'react'
import {Vector, AllRes, AllRestaurantsTitle} from './styles';
import AllRestaurants from './AllRestaurants';
import { useNavigate } from 'react-router-dom';

export default function Restaurants() {

  const Navigate = useNavigate();

  const onBottunClicked=() => {
    Navigate('/All restaurants');
   }
  return (
    
    <AllRes>
         <AllRestaurantsTitle onClick={onBottunClicked}>All Restaurants</AllRestaurantsTitle>
         <Vector/>
    </AllRes>

  )
}
