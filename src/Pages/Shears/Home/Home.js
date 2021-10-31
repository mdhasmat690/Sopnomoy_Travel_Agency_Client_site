import React,{useEffect} from 'react';
import Descripction from '../../Descripction.js/Descripction';
import MainOffer from '../../MainOffer/MainOffer';
import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
    return (
        <div>
            <TopBanner></TopBanner>
            <MainOffer></MainOffer>
            <br />
            <Descripction></Descripction>

        </div>
    );
};

export default Home;