import React from 'react'
import { Paragraph } from '../HomePage/HomePageMobile/AboutUs/styles';
import { ChefWeek, ChefOfTheWeekTitle, Yossi, YossiImg, Title, ParagraphTitle} from './styles';

export default function ChefOfTheWeek() {
  return (
    <ChefWeek>

        <ChefOfTheWeekTitle> CHEF OF THE WEEK: </ChefOfTheWeekTitle>
        <br/>

    <Yossi>
        <YossiImg/>
        <br/>
        <Paragraph>
        <Title>Chef Yossi Shitrit has been living and breathing his culinary dreams for more than two decades, including running the kitchen in his first restaurant, the fondly-remembered Violet, located in Moshav  Udim. Shitrit's creativity and culinary  acumen born of long experience  are expressed in the every detail of each and every dish.</Title>
        </Paragraph>
    </Yossi>
<br/>
<br/>

    </ChefWeek>
  )
}
