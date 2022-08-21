import React from 'react'
import Restaurants from '../AllRestaurants/Restaurants'
import ChefOfTheWeek from '../ChefOfTheWeek/ChefOfTheWeek'
import PopularRestaurant from '../PopularRestaurants/PopularRestaurant'
import SignatureDishCards from '../SignatureDishOf/SignatureDishCards'
import SignatureDishOf from '../SignatureDishOf/SignatureDishOf'
import AboutUs from './HomePageMobile/AboutUs/AboutUs'
import SearchBar from './HomePageMobile/SerchBar/SearchBar'


export default function HomePage() {
  return (
    <div>
        <SearchBar/>
        <PopularRestaurant/>
         <Restaurants/>  
         <SignatureDishCards/>
        <SignatureDishOf/>
        <ChefOfTheWeek/>
        <AboutUs/>
    </div>
  )
}