import React from 'react'
 import { Cards, ResDiv, CardImg, Name} from './styles';
import Slider from "react-slick";
import { AllRestaurants } from '../../interfaces/restaurants';

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 1.8,
  slidesToScroll: 1
}

export default function PopularRestaurant() {


  return (

    <Cards>
      <br/>
      POPULAR RESTURANT IN EPICURE: <br/><br/>
      <Slider {...settings}>
        {AllRestaurants.map((restaurants)=>(
            <ResDiv>
              <CardImg src={restaurants.URLImage} alt=''/>
              <Name>{restaurants.name}</Name>
              <Name>{restaurants.ChefName}</Name>
            </ResDiv>
        ))}
      </Slider>
    </Cards>
  )
}



