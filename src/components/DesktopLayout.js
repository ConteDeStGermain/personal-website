import React from 'react';

import HeaderMenu from './HeaderMenu';
import Main from './Main.js';
import MyPassion from './MyPassion.js';
import Skills from './Skills.js';
import Footer from './Footer.js';

const DesktopLayout = () => {
    return (
        <div>  
            <HeaderMenu />
            <Main />
            <MyPassion />
            <Skills /> 
            <Footer />
        </div>
    )

}

export default DesktopLayout;