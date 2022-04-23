import React from 'react'
import Announcement from '../components/Announcement';
import Catagories from '../components/Catagories';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import Products from '../components/Products';

function Home() {
  return (
    <div>
        <Announcement />
        <Navbar/>
        <Slider />
        <Catagories />
        <Products />
    </div>
  );
};

export default Home;