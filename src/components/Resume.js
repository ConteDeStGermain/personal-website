import React, { useState } from 'react';
import { Segment, Grid } from 'semantic-ui-react';
import '../componentsCSS/Resume.css';

const Resume = () => {
    let height = 0;
    let width = 0;
    
    // Required for proper compilation of Gatsby build
    if(typeof window !== `undefined`) {
      height = window.innerHeight;
      width = window.innerWidth;
    }

    let textPositioning = width <= 768 ? 'left' : 'right'; 

    const generateExperience = ( title, years, description ) => {
        return (
            <Grid.Row columns='3'>
                <Grid.Column textAlign={textPositioning} verticalAlign='top'>
                    <h2 class='label'> 
                        {title} <br/> 
                        <span class='years'>{years}</span>
                    </h2>
                </Grid.Column>
                <Grid.Column style={{ fontSize: '1.35em', height: '100%' }} width={6}>
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
                                <li className='resumeLi'>Python</li>
                                <li className='resumeLi'>Java</li>
                                <li className='resumeLi'>Affinity Photo (like Photoshop)</li>
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
                            <li className='resumeLi'>Node.js</li>
                            <li className='resumeLi'>MongoDB</li>
                            <li className='resumeLi'>Express</li>
                            <li className='resumeLi'>Node.js</li>
                            <li className='resumeLi'>Angular</li>
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

                    {generateExperience('ARCx DAO', 'Aug - Nov 2022', 
                      'Implemented new ui features, beautified React components and ' +
                      'fixed ui bugs, thus saving the other senior developer time, ' + 
                      'and allowing them to work on other features of the web app. ' +
                      'Interacted with a smart contract to fix UI issues on a web app. Quickly ' +
                      'adapted to a new work flow. Became more disciplined by working ' +
                      'remotely and balancing a school and job work week. Collaborated ' + 
                      'with my teammates using Github, reviewed code,and merged accepted ' +
                      'changes using a more standardized flow. ' + 
                      '(Create issue -> Fix -> make PR -> Have Pr reviewed)'
                    )}

                    {generateExperience('AedoAI inc.', 'May 2021 - Sept 2021', 
                     "Updated, maintained, and added new features to a React web application that catalogues SQL Facts. " +
                     "The platform boosted efficiency by helping other developers on the team, find " + 
                     "and test these Facts directly on the web app, thus saving time. " +
                     "Designed new aspects of the web app on my own, presented my ideas to the team, and " +
                     "implemented the accepted changes. " +
                     "Collaborated with my teammates using Github, reviewed code,and merged accepted " +
                     "changes."
                    )}

                    {generateExperience('Acadium', 'Feb 2020 - June 2020',
                        "I completed a four months, part time, apprenticeship with Acadium. Here I made a fully functional" +
                        " chat website from the back-end to the front-end. During this apprenticeship, I was taught the MERN stack." +
                        " (MongoDB, Express, React, Node.js) I completed this project to understand how back-end development works, " +
                        "and eventually be a full stack developer."
                    )}
                    

                    {generateExperience('Canadian Border Services Agency (CBSA)', 'Feb 2019 - Aug 2019',
                        "I was hired by the Canadian Border Services Agency as a Programer application developer " +
                        "to develop front-end internal tools using React. One of the projects I worked on, was a " +
                        "website that would help people working in airports around the country track the status " +
                        "of their printing order. Furthermore, I helped with the testing of internal tools " +
                        "for WACAG 2.0 using Pa11y and a script developed by me. I was also tasked to " +
                        "test various internal applications."
                    )}

                    {generateExperience('Lifeguard at H20', 'Mar 2018 - Jan 2019', 
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
                        "thanks to the internet, there are a lot of things that I " +
                        "taught myself, one of these being React. This is a process I hope I will " +
                        "continue to maintain for the rest of my life, as new technologies come " +
                        " out, my skills will have to remain up to date with the latest and greatest!"
                    )}

                    {generateExperience('University of Ottawa', '2020 - 2024',
                        "I am currently enrolled at the university of Ottawa in the BSc with Honours in " +
                        "Computer Scince program. Here, I hope to attain the knowledge necessary to become" +
                        "a better programmer. I am also looking forward to making a lot of " +
                        "great connections and develop great frienships over the years to come!"
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
                        "to attend. The experience of going through this school build me" +
                        " as a strong determined person. Overall, I will fondly remember " +
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