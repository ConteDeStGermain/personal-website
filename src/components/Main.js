import React, { useEffect, useState } from 'react';
import { Segment, Header, Container, Button } from 'semantic-ui-react';

import { pixiEffect } from './pixiEffect.js';
import '../componentsCSS/Main.css';
import '../componentsCSS/Layout.css';

const Main = () => {
    const [isInitialRender, setRenderState] = useState(true);

    useEffect(() => {
        // Calling pixi effect here to be able to have the canvas appear in segment
        pixiEffect(isInitialRender, setRenderState);
    })  

    
    return (
        <Segment attached='top' style={{ height: window.innerHeight }} id='canvasSegment'>
            <Container textAlign='left' id='titleContainer'> 
                <Header inverted id='titleText'>
                    Iustin Tapuc,<br/>
                    Fron-End React Developper
                </Header> 
                <Button inverted size='huge' color='yellow' className='hireMeButton'>
                    Tell Me About Your Project
                </Button>
            </Container>
            <canvas id='pixiRenderArea' width={window.innerWidth} height={window.innerHeight}></canvas>
        </Segment>
    )
}

export default Main;