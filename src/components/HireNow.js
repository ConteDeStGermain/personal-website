import React from 'react';

import { Segment, Button, Grid } from 'semantic-ui-react';

import '../componentsCSS/HireNow.css';

const HireNow = ({ description }) => {

    return (
        <div>  
            <Segment attached inverted className='layoutSegment' id='hireNowSegment'>

                <Grid stackable id='hireNowGrid' verticalAlign='middle'>

                    <Grid.Row centered columns='3'>
                        <Grid.Column textAlign='center' width={9}>
                            <h1 id='hireNowTitle'>Hire me today!</h1>
                            <p id='hireNowDescription'>
                                {description}
                            </p>
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
        </div>
    )

}

export default HireNow;