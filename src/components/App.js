import React, { useState, useEffect } from 'react';
import { Menu, Image, Segment } from 'semantic-ui-react';

import { pixiEffect } from './pixiEffect.js';
import logo from '../images/logo.png';
import './Header.css';

const App = () => {
    const [activeItem, setActiveItem] = useState('home');
    const [isInitialRender, setRenderState] = useState(true);

    useEffect(() => {
        console.log(document.getElementById('pixiRenderArea'))
        pixiEffect(isInitialRender, setRenderState)
    }) 

    // console.log(document.getElementById('pixiRenderArea'))

    return (
        <div>
            <Segment inverted className='headerSegment'>
                <Image src={logo}  size='mini'  id='desktopLogo' />
                <Menu inverted size="large" pointing secondary id='desktopMenu'>
                    <Menu.Item 
                        name='resume'  active={activeItem === 'resume'} style={{ marginRight: '10px' }}
                        onClick={() => setActiveItem('resume')}/>
                    <Menu.Item 
                        name='about' active={activeItem === 'about'} style={{ marginRight: '10px' }}
                        onClick={() => setActiveItem('about')}/>
                </Menu>
            </Segment>
            

            <Segment attached='top'>
                <canvas id='pixiRenderArea' width={window.innerWidth} height={window.innerHeight}></canvas>
            </Segment>

            <Segment attached='bottom' inverted style={{ margin: 0 }} >test</Segment>
        </div>  
    )
}

export default App;