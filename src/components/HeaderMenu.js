import React, { useState } from 'react';
import { Menu, Image, Segment, Sidebar, Icon } from 'semantic-ui-react';

import logo from '../images/logo.png';
import '../componentsCSS/Menu.css';

const HeaderMenu = () => {
    const [activeItem, setActiveItem] = useState('home');
    const [isVisible, setVisible] = useState(false);

    console.log(isVisible)
    return (
        <Segment inverted className='headerSegment'>
            <Icon 
                inverted size='big' 
                name='sidebar' id='mobileSidebarIcon' 
                onClick={() => setVisible(true)} />

            <Image src={logo}  size='mini'  id='desktopLogo' onClick={() => setActiveItem('home')} />

            {/* Desktop Menu Hidden on Mobile */}
            <Menu inverted pointing secondary id='desktopMenu'>
                <Menu.Item 
                    name='resume'  active={activeItem === 'resume'} style={{ marginRight: '10px' }}
                    onClick={() => setActiveItem('resume')}/>
                <Menu.Item 
                    name='about' active={activeItem === 'about'} style={{ marginRight: '10px' }}
                    onClick={() => setActiveItem('about')}/>
            </Menu>

            <Sidebar
                as={Menu}
                animation='overlay'
                inverted
                direction='right'
                onHide={() => setVisible(false)}
                vertical
                visible={isVisible}
                width='wide'
                id='mobileMenu'>

                <Menu.Item 
                    name='Resume'  active={activeItem === 'resume'} as='h1' 
                    onClick={() => {setActiveItem('resume'); setVisible(false)}}/>
                <Menu.Item 
                    name='About' active={activeItem === 'about'} as='h1' style={{ marginTop: 14 }}
                    onClick={() => {setActiveItem('about'); setVisible(false)}}/>
                <Menu.Item 
                    name='Contact' active={activeItem === 'Contact'} as='h1' style={{ color:'#FFFF00' }}
                    onClick={() => {setActiveItem('Contact'); setVisible(false)}}/>
                </Sidebar>

        </Segment>
    )

};

export default HeaderMenu;


