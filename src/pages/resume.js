import React from 'react';
import Layout from '../components/Layout.js';
import Resume from '../components/Resume.js';
import HireNow from '../components/HireNow.js';
import { Helmet } from "react-helmet";

const ResumePage = () => {
    var bottomDescription = (
        "Now that you haved learned more about my skills and my previous projects, feel free to" +
        " reach me to discuss our potential partnership."
    );
    
    var title = (
        <h1 id='titleText'>
            My abilites, in-depth.
        </h1>
    )

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Iustin Tapuc - Software Developer: Resume</title>
            </Helmet>
            <Layout title={title} >
                <Resume/>
                <HireNow description={bottomDescription} />
            </Layout>
        </div>
    );
}

export default ResumePage;