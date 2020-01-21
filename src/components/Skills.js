import React from 'react';
import { Segment, Header, Container, Button, Grid, List, Divider } from 'semantic-ui-react';

import '../componentsCSS/Layout.css';
import '../componentsCSS/Skills.css';

const Skills = ({ height, width }) => {
    return (
        <Segment 
            attached inverted className='layoutSegment' id='skillsSegment'>
                <Grid stackable columns={2} relaxed='very' style={{ height: '108%' }}>
                        <Grid.Column verticalAlign='middle'>
                            <Container text>
                                <div id='skillsDiv'>
                                    <Header inverted>My Skills Include:</Header>
                                    <List bulleted>
                                        <List.Item>React.js (Web)</List.Item>
                                        <List.Item>Javascript (Web)</List.Item>
                                        <List.Item>Java</List.Item>
                                    </List>
                                </div>
                            </Container>
                        </Grid.Column>
                        <Grid.Column verticalAlign='middle'>
                            <Container text>
                                <div id='currentlyLearningDiv'>
                                    <Header inverted>Currently Learning:</Header>
                                    <List>
                                        <List.Item>GraphQL, with Node.js and Appolo (Back-end)</List.Item>
                                    </List>
                                </div>
                            </Container>
                        </Grid.Column>
                </Grid>
            <Divider vertical hidden>
                <Button 
                    size={width <= 768 ? 'huge' : 'large'}
                    inverted color='yellow' className='hireMeButton'>
                    Let's talk now!
                </Button>
            </Divider>
        </Segment>
    )
}

export default Skills;