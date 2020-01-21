import React, {useEffect, useState} from 'react';

import HeaderMenu from './HeaderMenu';
import Main from './Main.js';
import MyPassion from './MyPassion.js';
import Skills from './Skills.js';
import Footer from './Footer.js';

const DesktopLayout = () => {
    const [dimensions, setDimensions] = useState(
        {
            height: window.innerHeight,
            width: window.innerWidth
        }
    );

    
    return (
        <div>  
            <HeaderMenu />
            <Main height={dimensions.height} width={dimensions.width} />
            <MyPassion />
            <Skills height={dimensions.height} width={dimensions.width} /> 
            <Footer height={dimensions.height} width={dimensions.width} />
        </div>
    )

}

export default DesktopLayout;