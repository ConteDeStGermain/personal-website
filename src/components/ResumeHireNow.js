import React from 'react';

import { Segment, Button, Grid } from 'semantic-ui-react';

import '../componentsCSS/ResumeHireNow.css';

const Resume = () => {

    return (
        <div>  
            <Segment attached inverted className='layoutSegment' id='hireNowSegment'>

                <Grid stackable id='hireNowGrid' verticalAlign='middle'>

                    <Grid.Row centered columns='3'>
                        <Grid.Column textAlign='center' width='8'>
                            <h1 id='hireNowTitle'>Hire a Expert React developer today!</h1>
                            <p id='p'>
                                Now that you know what I've done 
                                and what I could do for you, feel free to reach out 
                                and start a conversation. I always enjoy speaking with passionate 
                                business owners about their needs.
                            </p>
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row centered>
                        <Grid.Column verticalAlign='center'>
                            <Button size='large' inverted id='invertedBtn'>Reach me today</Button>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
        
            </Segment>
        </div>
    )

}

export default Resume;