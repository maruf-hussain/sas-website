import React from 'react';
import Banner from '../Component/Banner/Banner';
import Header from '../Component/Header/Header';
import WeDo from '../Component/We Do/WeDo';

const Home = () => {
    return (
        <div class='container'>
           <Header></Header> 
           <Banner></Banner>
           <WeDo></WeDo>
        </div>
    );
};

export default Home;