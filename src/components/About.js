import React, { useEffect, useState } from 'react';
import { Segment, Grid, Image, Container } from 'semantic-ui-react';
import Fade from 'react-reveal/Fade';
import '../componentsCSS/Layout.css';
import '../componentsCSS/About.css';

import adventure from '../images/adventure.jpeg';
import books from '../images/books.jpg';

const About = () => {
    const [screenWidth, setScreenWidth] = useState(769)
    const [textPosition, setTextPosition] = useState(null)
    // let screenWidth = 769;
    // let textPosition;

    // Required for proper compilation of Gatsby build
    useEffect(() => {
        if(typeof window !== `undefined`){
            setScreenWidth(window.innerWidth);
            setTextPosition(window.innerWidth <= 768 ? 'left' : 'right');
        }
    }, [])
    
    
    
    let aboutImageL = (
        <Fade left>
            <Image centered src={adventure} className='imageStyling' />
        </Fade>
    );

    let aboutImageR = (
        <Fade right>
            <Image centered src={books} className='imageStyling' />
        </Fade>
    );

    let aboutDescriptionL = ( 
        <Container text textAlign='left'>
            <h2 id='h2'>Exploration and Adventure!</h2>
            <p id='text'>
                Be it going on hikes or wandering through forgotten ruins, I love the sense of adventure!
                There is a special feeling I get when I walk up a mountain and start feeling a 
                cool wind on my face, only to look behind me and be in awe of the beautiful landscape
                that lies below.
            </p>
        </Container>
    );

    console.log('asdf')
    
    let aboutDescriptionR = (
        <Container text textAlign={textPosition}>
            <h2 id='h2'>I love personal <br /> development litterature</h2>
            <p id='text'>
               I was recently introducted to the world of audio books and personal development novels.
               As someone who believes that there is always room for improvement, I think the right
               self-help book can set you on the right path. To those interested, I strongly reccomend
               Mastery by the excellent Robert Greene, and Ego is the Enemy by Ryan Holiday.
            </p>
        </Container>
    );

    return (
        <div>  
            <Segment className='layoutSegment' id='aboutSegemnt'>
                <Grid stackable id='aboutGrid'>
                    <Grid.Row columns='4'>
                        <Grid.Column width='1'></Grid.Column>

                        <Grid.Column verticalAlign='middle' width='8'>
                            {screenWidth <= 768 ? aboutImageR : aboutDescriptionR} 
                        </Grid.Column>

                        <Grid.Column width='5'>
                            {screenWidth <= 768 ? aboutDescriptionR : aboutImageR}
                        </Grid.Column>

                        <Grid.Column width='1'></Grid.Column>
                    </Grid.Row>

                    <Grid.Row columns='4'>
                        <Grid.Column width='1'></Grid.Column>

                        <Grid.Column width='5'>
                            {aboutImageL}
                        </Grid.Column>

                        <Grid.Column verticalAlign='middle' width='8'>
                            {aboutDescriptionL}
                        </Grid.Column>

                        <Grid.Column width='1'></Grid.Column>
                </Grid.Row>

                </Grid>
            </Segment>
        </div>
    )

}

export default About;


