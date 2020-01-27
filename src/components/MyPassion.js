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
            <Grid stackable relaxed='very' divided id='grid'>
            
                <Grid.Row verticalAlign='middle' columns={2}>
                    <Grid.Column>
                        <Fade>
                            <Image centered src={valuesImg} id='image' />
                        </Fade>
                    </Grid.Column>

                    <Grid.Column>
                        <Fade>
                            <Container text id='textContainer'>
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
                        </Fade>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    )
}

export default MyPassion;