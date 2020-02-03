import React, { useState } from 'react';
import { Segment, Grid } from 'semantic-ui-react';
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
                <Grid stackable id='resumeGrid'>

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
                                <li className='resumeLi'>Javascript</li>
                                <li className='resumeLi'>HTML</li>
                                <li className='resumeLi'>CSS</li>
                                <li className='resumeLi'>Java</li>
                                <li className='resumeLi'>Responsive design</li>
                                <li className='resumeLi'>UI design</li>
                                <li className='resumeLi'>Semantic UI Framework</li>
                                <li className='resumeLi'>Adobe Illustrator</li>
                                <li className='resumeLi'>Adobe Photoshop</li>
                           </ul>
                        </Grid.Column>

                        <Grid.Column textAlign={textPositioning} verticalAlign='top' width='2'>
                            <h2 class='label'>  
                                <span class='years'>Familiar with:</span>
                            </h2>
                        </Grid.Column>

                        <Grid.Column className='resumeSkills' textAlign='left' >
                            <ul className='resumeUl'>
                            <li className='resumeLi'>Android development using Java</li>
                            <li className='resumeLi'>Material design philosophy</li>
                            <li className='resumeLi'>Bootstrap</li>
                            <li className='resumeLi'>Node.js</li>
                            <li className='resumeLi'>The Microsoft suite</li>
                            <li className='resumeLi'>Troubleshooting computers</li>
                            <li className='resumeLi'>WACAG 2.0</li>
                            </ul>
                        </Grid.Column>
                    </Grid.Row>
                    
                    <Grid.Row columns='3'>
                        <Grid.Column verticalAlign='middle' textAlign={textPositioning} >
                            <h1 class='categoryLabel'>Languages</h1>
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row columns='3'> 
                        <Grid.Column textAlign={textPositioning} verticalAlign='top'>
                            <h2 class='label'>  
                                <span class='years'>Spoken and Written:</span>
                            </h2>
                        </Grid.Column>
                        <Grid.Column style={{ fontSize: '1.35em', height: '100%' }}>
                                <p class='p'>
                                    English, French and Romanian
                                </p>
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row columns='3'>
                        <Grid.Column verticalAlign='middle' textAlign={textPositioning} >
                            <h1 class='categoryLabel'>Work Experience</h1>
                        </Grid.Column>
                    </Grid.Row>

                    {generateExperience('Canadian Border Services Agency (CBSA)', 'Feb 2019 - Aug 2019',
                        "I was hired by the Canadian Border Services Agency as a Programer application developer " +
                        "to develop front-end internal tools using React. One of the projects I worked on, was a " +
                        "website that would help people working in airports around the country track the status " +
                        "of their printing order. Furthermore, I helped with the testing of internal tools " +
                        "for WACAG 2.0 using Pa11y and a script developed by me. I was also tasked to " +
                        "test various internal applications."
                    )}

                    {generateExperience('Lifeguard at H20', 'Mar 2019 - Jan 2019', 
                        "As someone who enjoyed swimming since a young age, I decided to be a lifeguard as" +
                        " one of my first jobs. While working with H20, I was assigned to one of Hilton " +
                        "hotels' pool. There I learned a couple of things about customer satisfaction " +
                        "that I still remember today, like to never say 'no' or 'I don't know' to a " +
                        "customer, always direct them to someone who can provide them with " +
                        "a potential solution when possible."
                    )}

                    <Grid.Row columns='3'>
                        <Grid.Column verticalAlign='middle' textAlign={textPositioning} >
                            <h1 class='categoryLabel'>Education</h1>
                        </Grid.Column>
                    </Grid.Row>

                    {generateExperience('Self-taught', '2017 - present',
                        "I am someone who enjoys learning new and useful technologies therefore, " +
                        "thanks to the wonders of the internet, there are a lot of things that I " +
                        "taught myself, one of these being React. This is a process I hope I will " +
                        "continue to maintain for the rest of my life, as new technologies come " +
                        " out, my skills will have to remain up to date with the latest and greatest!"
                    )}

                    {generateExperience('CEGEP Heritage College', '2017 - 2020',
                        "Heritage college is a CEGEP or a Collège d'Enseignement Général et Professionnel. " +
                        "Going throught this institution is part of the expected curriculum for all " +
                        "students who live in Québec. Here I chose to study in a vocational computer " +
                        "science program, but then switched to social sciences. I overall enjoyed my experience " +
                        "here and I believe it will be a good transition towards university."
                    )}
                    
                    {generateExperience('Collège Nouvelles-Frontières', '2012 - 2017',
                        "Collège Nouvelles-Frontières is a private high school that I had the opportunity " +
                        "to attend. There, I had the chance to learn the basic knowledge that would build me" +
                        " as strong determined person. Overall, I will fondly remember " +
                        "the excellent classmates and teachers I had there."
                    )}                    
                </Grid>
            </Segment>
        </div>
    )

}

export default Resume;


// For example: when I was in 'Secondaire 4' " +
//                         "I studied the advanced math class on my own because I wasn't able to get " +
//                         "into the advancecd class the previous year. At the end of that year, I " +
//                         "did the advanced math final and got the advanced course credited as if I was never " +
//                         "in the regular math class to begin with.