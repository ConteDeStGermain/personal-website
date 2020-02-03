import React from 'react';
import { Menu, Segment, Grid, Icon } from 'semantic-ui-react';
import { Link } from 'gatsby';

import '../componentsCSS/Layout.css';
import '../componentsCSS/Footer.css';

const Footer = ({ width }) => {
    return (
        <Segment attached='bottom' className='layoutSegment' id='footerSegment' inverted>
                <Grid>

                    <Grid.Row columns='1' style={{ paddingBottom: 0 }} >
                        <Grid.Column textAlign='center' verticalAlign='middle'>
                            <h2 id='footerTitle'>
                                Let our journey {width <= 768 ? <br /> : '' } together begin!
                            </h2>
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row centered style={{ padding: 0 }}>
                        <Menu inverted secondary>
                            <Menu.Item as={Link}
                                name='HOME'
                                activeClassName='active'
                                to='/' 
                                className='bottomNavBtn'
                            />
                            <Menu.Item as={Link}
                                name='RESUME'
                                activeClassName='active'
                                to='/resume' 
                                className='bottomNavBtn'
                            />
                            <Menu.Item 
                                as={Link}
                                name='ABOUT'
                                activeClassName='active'
                                to='/about'  className='bottomNavBtn'
                            />
                        </Menu>
                    </Grid.Row>

                    <Grid.Row centered>
                        <Grid.Column verticalAlign='middle'>
                            <Icon 
                                name='github square' 
                                size={width <= 768 ? 'big' : 'large'}
                                onClick={() => window.open('https://github.com/ConteDeSanGermain')}
                            />
                            <Icon 
                                name='twitter square' 
                                size={width <= 768 ? 'big' : 'large'}
                                onClick={() => window.open('https://twitter.com/ConteStGermain_')}
                            />
                            <Icon 
                                name='linkedin alternate' 
                                size={width <= 768 ? 'big' : 'large'}
                                onClick={() => window.open('https://www.linkedin.com/in/iustin-tapuc-it')}
                            />
                            <Icon 
                                name='mail' 
                                size={width <= 768 ? 'big' : 'large'}
                                onClick={() => window.location = 'mailto:itapuc7@gmail.com'}/>

                        </Grid.Column>
                    </Grid.Row>
                </Grid>                
        </Segment>
    )
}

export default Footer;