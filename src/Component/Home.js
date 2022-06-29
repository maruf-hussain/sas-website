import React from 'react';
import Banner from './Banner/Banner';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Mission from './Mission/Mission';
import WeDo from './We Do/WeDo';
import Who from './Who We Are/Who';


const Home = () => {
    return (
        <div class='container'>
      <Header></Header>
      <Banner></Banner>
      <WeDo></WeDo>
      <Mission></Mission>
      <Who></Who>
      <Footer></Footer>
        </div>
    );
};

export default Home;