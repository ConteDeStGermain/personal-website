import React from 'react';
import Layout from '../components/Layout.js';
import Resume from '../components/Resume.js';
import HireNow from '../components/HireNow.js';

const ResumePage = () => {
    var bottomDescription = (
        "Now that you haved learned more about my skills and my previous projects, feel free to" +
        " reach me to discuss our potential partnership."
    );
        

    return (
        <Layout>
            <Resume/>
            <HireNow description={bottomDescription} />
        </Layout>
    );
}

export default ResumePage;