import React from 'react';
import Allproducts from './products';
import Footer from './footer';
import Navbar from './Navbar';

function Home() {
  return (
    <div>
      <Navbar />
      <Allproducts />
      <Footer />
    </div>
  );
}

export default Home;
