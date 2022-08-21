import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Restaurants from '../AllRestaurants/Restaurants'
import AllRestaurants from '../AllRestaurants/AllRestaurants'
import Contact_Us from '../Footer/Contact_Us'
import Footer from '../Footer/Footer'
import Header from '../header/Header'
import HomePage from '../HomePage/HomePage'

export default function Layout() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
        <Route path='' element={<HomePage/>}/>
        <Route path='/ContactUS' element={<Contact_Us/>}/>
        <Route path='/Restaurants' element={<Restaurants/>}/>
        <Route path='/All restaurants' element={<AllRestaurants/>}/>
        <Route path='/All restaurants' element={<AllRestaurants/>}/>
    </Routes>
    <Footer/>
    {/* <HomePageMobile/> */}

    </BrowserRouter>
  )
}
