import React, { useState } from 'react'
import { AllRestaurantsTitle, Restaurant } from './styles';
import { Navigate, useNavigate } from 'react-router-dom';
import Restaurants from './Restaurants';

export default function AllRestaurants() {
  const [restaurants, setRestaurants] = useState('All Restaurants');

  return (
    <Restaurant>
    </Restaurant>
  )
}
