import React from 'react';
import About from '../components/About.js'; 
import HireNow from '../components/HireNow.js';
import Layout from '../components/Layout.js';

const AboutIndex = () => {
    var bottomDescription = (
        "Now that you know me a little better, allow me to get to know you! Contact me today " +
        "and let's start working together." 
    );

    return (
        <Layout>
            <About />
            <HireNow description={bottomDescription}/>    
        </Layout>
    )
};

export default AboutIndex;