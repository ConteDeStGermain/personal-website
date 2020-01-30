import React, { useState } from 'react';

import { Segment, Button, Grid } from 'semantic-ui-react';

import HeaderMenu from './HeaderMenu';
import Main from './Main.js';
import Footer from './Footer.js';

import '../componentsCSS/Resume.css';

const Resume = () => {
    const [dimensions, setDimensions] = useState(
        {
            height: window.innerHeight,
            width: window.innerWidth
        }
    );

    let textPositioning = dimensions.width <= 768 ? 'left' : 'right'; 

    const generateExperience = ( title, years, description ) => {
        return (
            <Grid.Row columns='3'>
                <Grid.Column textAlign={textPositioning} verticalAlign='top'>
                    <h2 class='label'> 
                        {title} <br/> 
                        <span class='years'>{years}</span>
                    </h2>
                </Grid.Column>
                <Grid.Column style={{ fontSize: '1.35em', height: '100%' }}>
                        <p class='p'>
                            {description}
                        </p>
                </Grid.Column>
            </Grid.Row>
        )
    }

    return (
        <div>  
            <Segment attached className='layoutSegment' id='resumeSegment'>
                <Grid stackable id='grid'>

                    {/*First row*/}
                    <Grid.Row columns='3'>
                        <Grid.Column verticalAlign='middle' textAlign={textPositioning} >
                            <h1 class='categoryLabel'>Skills</h1>
                            </Grid.Column>
                    </Grid.Row>

                    {/*Second Row*/}
                    <Grid.Row columns='6'>
                        <Grid.Column></Grid.Column>

                        <Grid.Column textAlign={textPositioning} verticalAlign='top'>
                            <h2 class='label'>  
                                <span class='years'>Knowledgeble with:</span>
                            </h2>
                        </Grid.Column>

                        <Grid.Column className='resumeSkills' textAlign='left' width='2'>
                           <ul className='resumeUl'>
                                <li className='resumeLi'>React.js</li>
                                <li className='resumeLi'>React.js</li>
                                <li className='resumeLi'>React.js</li>
                                <li className='resumeLi'>React.js</li>
                                <li className='resumeLi'>React.js</li>
                                <li className='resumeLi'>React.js</li>
                                <li className='resumeLi'>React.js</li>
                                <li className='resumeLi'>React.js</li>
                                <li className='resumeLi'>React.js</li>
                                <li className='resumeLi'>React.js</li>
                                <li className='resumeLi'>React.js</li>
                                <li className='resumeLi'>React.js</li>
                                <li className='resumeLi'>React.js</li>
                           </ul>
                        </Grid.Column>

                        <Grid.Column textAlign={textPositioning} verticalAlign='top' width='2'>
                            <h2 class='label'>  
                                <span class='years'>Familiar with:</span>
                            </h2>
                        </Grid.Column>

                        <Grid.Column className='resumeSkills' textAlign='left' >
                            <ul className='resumeUl'>
                            <li className='resumeLi'>React.js</li>
                            <li className='resumeLi'>React.js</li>
                            <li className='resumeLi'>React.js</li>
                            <li className='resumeLi'>React.js</li>
                            <li className='resumeLi'>React.js</li>
                            <li className='resumeLi'>React.js</li>
                            <li className='resumeLi'>React.js</li>
                            <li className='resumeLi'>React.js</li>
                            <li className='resumeLi'>React.js</li>
                            <li className='resumeLi'>React.js</li>
                            <li className='resumeLi'>React.js</li>
                            <li className='resumeLi'>React.js</li>
                            <li className='resumeLi'>React.js</li>
                            </ul>
                        </Grid.Column>

                               
                        
                    </Grid.Row>

                    {/*Third Row*/}
                    <Grid.Row columns='3'>
                        <Grid.Column verticalAlign='middle' textAlign={textPositioning} >
                            <h1 class='categoryLabel'>Education </h1>
                        </Grid.Column>
                    </Grid.Row>

                    {generateExperience('CEGEP Heritage College', '2017 - 2020',
                        "Heritage college is a CEGEP (college d'enseignement general et profetionel")}
                    
                    {generateExperience('Heritage College', 'August 2020',
                        "Lorem Ipsum is simply dummy text of the printing and r since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.")}
                    
                    {/*Fourth Row*/}
                    <Grid.Row columns='3'>
                        <Grid.Column verticalAlign='middle' textAlign={textPositioning} >
                            <h1 class='categoryLabel'>Work Experience </h1>
                        </Grid.Column>
                    </Grid.Row>

                    {generateExperience('Heritage College', 'August 2020',
                        "Lorem Ipsum is simply dummy text of the printing and r since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.")}
                    

                </Grid>
            </Segment>
        </div>
    )

}

export default Resume;