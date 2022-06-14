import React from 'react';
import Banner from '../Component/Banner/Banner';
import Footer from '../Component/Footer/Footer';
import Header from '../Component/Header/Header';
import Mission from '../Component/Mission/Mission';
import WeDo from '../Component/We Do/WeDo';
import Who from '../Component/Who We Are/Who';

const Home = () => {
    return (
        <div class='container'>
           <Header></Header> 
           <Banner></Banner>
           <WeDo></WeDo>
           <Mission></Mission>
           <Who></Who>
           <Footer></Footer>
           <div></div>
        </div>
    );
};

export default Home;