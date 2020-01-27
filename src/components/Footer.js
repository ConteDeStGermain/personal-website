import React from 'react';
import { Menu, Segment, Grid, Icon, Button } from 'semantic-ui-react';

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
                            <Menu.Item name='RESUME' id='fixedResume'/>
                            <Menu.Item name='ABOUT' id='fixedAbout'/>
                            <Menu.Item name='CONTACT' style={{ color: '#eac734' }} id='fixedContact'/>
                        </Menu>
                    </Grid.Row>

                    <Grid.Row centered>
                        <Grid.Column verticalAlign='middle'>
                            <Icon 
                                name='twitter square' 
                                size={width <= 768 ? 'big' : 'large'}/>
                            <Icon 
                                name='linkedin alternate' 
                                size={width <= 768 ? 'big' : 'large'}/>
                            <Icon 
                                name='mail' 
                                size={width <= 768 ? 'big' : 'large'}/>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>                
        </Segment>
    )
}

export default Footer;