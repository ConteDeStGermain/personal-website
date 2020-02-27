import React from 'react';
import { Image, Segment, Header, Container, Button, Grid } from 'semantic-ui-react';
import Fade from 'react-reveal/Fade';

import '../componentsCSS/Layout.css';
import '../componentsCSS/MyPassion.css';
import valuesImg from '../images/myPic.jpg';

const MyPassion = () => {

    return (
        <Segment 
            attached className='layoutSegment' id='myPassionSegment'>
            <Grid stackable relaxed='very' divided id='passionGrid'>
            
                <Grid.Row verticalAlign='middle' columns={2}>
                    <Grid.Column>
                        <Fade>
                            <Image centered src={valuesImg} className='imageStyling' id='image' />
                        </Fade>
                    </Grid.Column>

                    <Grid.Column width={7}>
                        <Fade>
                            <Container text id='textContainer'>
                                <h2 id='h2'>I am a dedicated React developer</h2>
                                <p id='text'>
                                    As a front-end developer, I am in the business of creating
                                    reliable websites that look clean and work smoothly. If you are
                                    in need of such talent, don't 
                                    hesitate to reach me through email, Linkedin, or Twitter.
                                </p>
                            </Container>
                        </Fade>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    )
}

export default MyPassion;