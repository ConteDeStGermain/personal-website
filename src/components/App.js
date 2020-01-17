import React, { useState, useEffect } from 'react';
import { Menu, Image, Segment, Header, Container, Button } from 'semantic-ui-react';

import { pixiEffect } from './pixiEffect.js';
import logo from '../images/logo.png';

import './Header.css';
import './Layout.css';

const App = () => {
    const [activeItem, setActiveItem] = useState('home');
    const [isInitialRender, setRenderState] = useState(true);

    useEffect(() => {
        // Calling pixi effect here to be able to have the canvas appear in segment
        pixiEffect(isInitialRender, setRenderState);
    })

    return (
        <div>
            {/* Desktop Menu with logo */}
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

            {/* Desktop main layout */}
            <Segment attached='top' style={{ height: window.innerHeight }} id='canvasSegment'>
                <Container textAlign='left' id='titleContainer'> 
                    <Header inverted id='titleText' >
                        Iustin Tapuc,<br/>
                        Fron-End React Developper
                    </Header> 
                    <Button inverted size='huge' className='hireMeButton'>
                        Hire me
                    </Button>
                </Container>
                <canvas id='pixiRenderArea' width={window.innerWidth} height={window.innerHeight}></canvas>
            </Segment>

            <Segment 
                attached className='layoutSegment'
                style={{ height: window.innerHeight + 20, backgroundColor: '#F7F7FF'}} >
                    Values
            </Segment>

            <Segment 
                attached inverted className='layoutSegment'
                style={{ height: '40em', backgroundColor: '#444446' }}>
                    Most important skills
            </Segment>

            <Segment 
                attached='bottom' inverted className='layoutSegment'
                style={{ height: '20em' }}>
                  Let's work together/Footer
            </Segment>
        </div>  
    )
}

export default App;