import React, { useState } from 'react';

import HeaderMenu from './HeaderMenu';
import Main from './Main.js';
import Footer from './Footer.js';

import '../componentsCSS/Layout.css';

const Layout = (props) => {
    let height;
    let width;

    // Required for proper compilation of Gatsby build
    if(typeof window !== `undefined`){
        height = window.innerHeight;
        width = window.innerWidth;
    }

    return (
        <div>  
            <HeaderMenu />
            <Main height={height} width={width} pageTitle={props.title} />
                { props.children }
            <Footer height={height} width={width} />
        </div>
    )

}

export default Layout;