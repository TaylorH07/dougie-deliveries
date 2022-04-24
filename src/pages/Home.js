import React from 'react'
import Announcement from '../components/Announcement';
import Catagories from '../components/Catagories';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer';

function Home() {
  return (
    <div>
        <Navbar/>
        <Announcement />
        <Slider />
        <Catagories />
        <Products />
        <Newsletter />
        <Footer />
    </div>
  );
};

export default Home;