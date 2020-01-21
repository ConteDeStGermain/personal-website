import React from 'react';
import { Menu, Segment, Grid, Icon } from 'semantic-ui-react';

import '../componentsCSS/Layout.css';
import '../componentsCSS/Footer.css';

const Footer = ({ width }) => {
    return (
        <Segment 
            attached='bottom' inverted className='layoutSegment'
            style={{ height: '20em' }}>
                <Grid style={{ height: '111%' }}>
                    <Grid.Row columns='1' style={{ paddingBottom: 0 }} >
                        <Grid.Column textAlign='center' verticalAlign='middle'>
                            <div id='footerText'>Let's begin the work together!</div>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row centered style={{ padding: 0 }}>
                        <Menu secondary inverted>
                            <Menu.Item name='RESUME'/>
                            <Menu.Item name='ABOUT'/>
                            <Menu.Item name='CONTACT' style={{ color: '#FFFF00' }} />
                        </Menu>
                    </Grid.Row>
                    <Grid.Row centered>
                        <Grid.Column verticalAlign='middle'>
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