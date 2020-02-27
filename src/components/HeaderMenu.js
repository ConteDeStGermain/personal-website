import React, { useState } from 'react';
import { Menu, Image, Segment, Sidebar, Icon } from 'semantic-ui-react';
import { Link } from 'gatsby';

import logo from '../images/logo.png';
import '../componentsCSS/HeaderMenu.css';


const HeaderMenu = () => {
    const [isVisible, setVisible] = useState(false);

    return (
        <Segment inverted className='headerSegment'>
            <Icon 
                inverted size='big' 
                name='sidebar' id='mobileSidebarIcon' 
                onClick={() => setVisible(true)}
            />
        

            <Link to='/'>
                <Image src={logo}  size='mini'  id='logo' />
            </Link>

            {/* Desktop Menu Hidden on Mobile */}
            <Menu inverted pointing secondary id='desktopMenu'>
                <Menu.Item as={Link}
                    name='Home'
                    activeClassName='active'
                    to='/' 
                    style={{ marginRight: '10px' }}
                />
                <Menu.Item
                    as={Link}
                    name='resume'
                    activeClassName='active'
                    to='/resume'
                    style={{ marginRight: '10px' }}
                />
                <Menu.Item
                    as={Link}
                    name='about' 
                    activeClassName='active'
                    to='/about'
                    style={{ marginRight: '10px' }}
                />
            </Menu>

            <Sidebar
                as={Menu}
                animation='overlay'
                inverted
                direction='top'
                onHide={() => setVisible(false)}
                vertical
                visible={isVisible}
                width='thin'
                id='mobileMenu'> 
                <Menu.Item as={Link}
                    name='Home'
                    activeClassName='active'
                    to='/' 
                    className='mobileItem'
                />

                <Menu.Item 
                    name='Resume' 
                    as={Link}
                    activeClassName='active'
                    to='/resume'
                    className='mobileItem'
                />
                <Menu.Item 
                    name='About'
                    as={Link}
                    activeClassName='active'
                    to='/about'
                    className='mobileItem'
                    />
                </Sidebar>

        </Segment>
    )

};

export default HeaderMenu;


