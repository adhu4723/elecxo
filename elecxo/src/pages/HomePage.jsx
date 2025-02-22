import React from 'react'
import Navbar from '../layout/Navbar'
import Categories from '../components/Categories'
import { CarouselCustomNavigation } from '../components/Carousel'
import TodaysDeal from '../components/TodaysDeal'

function HomePage() {
  return (
    <div className='px-4 space-y-6 lg:px-8'>
    
      <Categories />
      <CarouselCustomNavigation />
      <TodaysDeal />
    </div>
  )
}

export default HomePage
