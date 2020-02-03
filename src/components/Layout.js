import React, { useState } from 'react';

import HeaderMenu from './HeaderMenu';
import Main from './Main.js';
import Footer from './Footer.js';

import '../componentsCSS/Layout.css';

const Layout = (props) => {
    const [dimensions, setDimensions] = useState(
        {
            height: window.innerHeight,
            width: window.innerWidth
        }
    );

    var pageName = props.children[0].type.name;
    var title;

    if (pageName === 'MyPassion') {
        title = (
            <h1  id='titleText'>
                Iustin Tapuc,<br/>
                <span id='testing'>Front-End React Developer</span>
            </h1> 
        )
    } else if (pageName === 'Resume') {
        title = (
            <h1 id='titleText'>
                My abilites, in-depth.
            </h1>
        )
    } else (
        title = (
            <h1 id='titleText'>
                Things I enjoy in life.
            </h1>
        )
    )

    return (
        <div>  
            <HeaderMenu />
            <Main height={dimensions.height} width={dimensions.width} pageTitle={title} />
                { props.children }
            <Footer height={dimensions.height} width={dimensions.width} />
        </div>
    )

}

export default Layout;