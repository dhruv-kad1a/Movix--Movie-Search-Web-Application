import React from 'react'
import './Home.scss'
import HeroBanner from './heroBanner/HeroBanner'
import Trending from './trending/Trending';
import Popular from './popular/Popular';
import TopRated from './topRated/TopRated';

HeroBanner;

const Home = () => {
  return (
    <div className='homePage'>
      <HeroBanner/>
      <Trending/>
      <Popular/>
      <TopRated/>
      <div></div>
    </div>
    
  )
}

export default Home