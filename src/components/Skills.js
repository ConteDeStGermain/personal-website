import React from 'react';
import { Segment, Container, Button, Grid  } from 'semantic-ui-react';

import '../componentsCSS/Layout.css';
import '../componentsCSS/Skills.css';

const Skills = () => {
    return (
        <Segment attached inverted className='layoutSegment' id='skillsSegment'>

                <Grid stackable columns={2} id='skillsGrid' verticalAlign='middle'>

                    <Grid.Row centered>
                        <Grid.Column textAlign='center' width={10}>
                            <h1 id='segmentTitle'>I enjoy learning, and taught myself a lot.</h1>
                            <p id='p'>
                                Thanks to Udemy, I have taught myself multiple technologies 
                                such as React.js, and the basics of Android development using Java.
                                I am also currently studying at the university of Ottawa in Computer Science.  
                                Below is a sample of what I have learned, and what I am currently learning:
                            </p>
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                        <Grid.Column>
                            <Container text>
                                <div id='mobileFontSize'>
                                    <h2 class='skillsH2'>Learned Skills:</h2>
                                    <ul className='noBullet basicSkillsList'>
                                        <li>React.js & Javascript (web)</li>
                                        <li>Java (software development)</li>
                                    </ul>
                                </div>
                            </Container>
                        </Grid.Column>

                        <Grid.Column>
                            <Container text>
                                <div id='mobileFontSize'>
                                    <h2 className='skillsH2'>Currently learning:</h2>
                                    <ul className='noBullet'>
                                        <li>Better ui design</li>
                                        <li>Techniques of Search Engine Optimization (SEO)</li>
                                    </ul>
                                </div>
                            </Container>
                        </Grid.Column>
                    </Grid.Row>
                
                    <Grid.Row centered>
                        <Grid.Column verticalAlign='middle'>
                            <Button 
                                size='large' 
                                inverted 
                                id='invertedBtn'
                                onClick={() => window.location = 'mailto:itapuc7@gmail.com'}
                            >
                                Reach me today
                            </Button>
                        </Grid.Column>
                    </Grid.Row>
                
                </Grid>
        
        </Segment>
    )
}

export default Skills;