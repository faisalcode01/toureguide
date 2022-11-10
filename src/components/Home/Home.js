import React from 'react';
import Banner from '../Banner/Banner';
import Client from '../Client/Client';
import Newsletter from '../Newsletter/Newsletter';
import Services from '../Services/Services';

const Home = () => {
    document.title = "Home";
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Client></Client>
            <Newsletter></Newsletter>
            
        </div>
    );
};

export default Home;