 import React from 'react';
import Header from "../../components/header/header"; // Capital 'H' for Header, lowercase 'header' for path
import Footer from "../../components/footer/footer"; // Capital 'F' for Footer, lowercase 'footer' for path
import Banner from '../../components/banner/banner';

function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <Footer />
    </div>
  );
}

export default Home;