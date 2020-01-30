import React, { useState } from 'react';
import { Segment, Grid, Image, Container } from 'semantic-ui-react';
import Fade from 'react-reveal/Fade';

import ResumeHireNow from './ResumeHireNow.js';

import '../componentsCSS/Layout.css';
import '../componentsCSS/About.css';

import valuesImg from '../images/myPic.jpg';

const DesktopLayout = () => {
    
    
    return (
        <div>  
            <Segment class='layoutSegment'>
                <Grid stackable id='aboutGrid'>
                    <Grid.Row columns='4'>
                        <Grid.Column width='1'></Grid.Column>
                        <Grid.Column verticalAlign='middle' width='8'>
                            <Container text textAlign='right'>
                                <h2 id='h2'>My passion and focus is <br /> React development</h2>
                                <p id='text'>
                                    Let's be honest and cut through the 
                                    marketing fluff. You need a website that 
                                    looks amazing and actually works. 
                                    Bottom line, that's what I do. 
                                    And if you want to learn more about working with me, 
                                    pick up the phone and give me a call (or email).
                                </p>
                            </Container>
                        </Grid.Column>

                        <Grid.Column width='5'>
                            <Fade right>
                                <Image centered src={valuesImg} id='image' />
                            </Fade>
                        </Grid.Column>

                        <Grid.Column width='1'></Grid.Column>
                    </Grid.Row>

                    <Grid.Row columns='4'>
                        <Grid.Column width='1'></Grid.Column>

                        <Grid.Column width='5'>
                            <Fade left>
                                <Image centered src={valuesImg} id='image' />
                            </Fade>
                        </Grid.Column>

                        <Grid.Column verticalAlign='middle' width='8'>
                            <Container text textAlign='left'>
                                <h2 id='h2'>My passion and focus is <br /> React development</h2>
                                <p id='text'>
                                    Let's be honest and cut through the 
                                    marketing fluff. You need a website that 
                                    looks amazing and actually works. 
                                    Bottom line, that's what I do. 
                                    And if you want to learn more about working with me, 
                                    pick up the phone and give me a call (or email).
                                </p>
                            </Container>
                        </Grid.Column>

                        <Grid.Column width='1'></Grid.Column>
                </Grid.Row>

                </Grid>
            </Segment>

            <ResumeHireNow />    
        </div>
    )

}

export default DesktopLayout;