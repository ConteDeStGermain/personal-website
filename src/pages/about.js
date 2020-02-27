import React from 'react';
import About from '../components/About.js'; 
import HireNow from '../components/HireNow.js';
import Layout from '../components/Layout.js';
import { Helmet } from "react-helmet";

const AboutIndex = () => {
    var bottomDescription = (
        "Now that you know me a little better, allow me to get to know you! Contact me today " +
        "and let's start working together." 
    );

    var title = (
        <h1 id='titleText'>
            Things I enjoy in life.
        </h1>
    )

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>More about me</title>
            </Helmet>
            <Layout title={title}>
                <About />
                <HireNow description={bottomDescription}/>    
            </Layout>
        </div>
    )
};

export default AboutIndex;