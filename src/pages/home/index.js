import React from 'react';

import Banner from '../../containers/Home/Banner';
import TrendingCreators from '../../containers/Home/TrendingCreators';
import Collections from '../../containers/Home/Collections';
import HottestNFTs from '../../containers/Home/HottestNFTs';
import DiscoverNFT from '../../containers/Home/Discover';
import FAQ from '../../containers/Home/FAQ';
import AddNFT from '../../containers/Home/AddNFT';

const Homepage = () => {
    return (
        <>
            <Banner />
            <TrendingCreators />
            <Collections />
            <HottestNFTs />
            <DiscoverNFT />
            <FAQ />
            <AddNFT />
        </>
    );
};
export default Homepage;

