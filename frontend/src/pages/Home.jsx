import React from 'react'
import MainBanner from '../components/MainBanner'
import Categories from '../components/Categories'
import BestSeller from '../components/BestSeller'
import AllProducts from '../pages/AllProducts'
import ContactUs from '../components/Contact'
import AppDwnd from '../components/AppDwnd'

const Home = () => {
  return (
    <div className='mt-5'>
      <MainBanner />
      <Categories />
      <BestSeller />
      <AllProducts /> 
      <AppDwnd />
      <ContactUs />
    </div>
  )
}

export default Home
