import React, { useEffect, useState } from 'react';
import { Segment, Header, Container, Button } from 'semantic-ui-react';

import { pixiEffect } from './pixiEffect.js';
import '../componentsCSS/Main.css';
import '../componentsCSS/Layout.css';

const Main = ({ height, width }) => {
    const [isInitialRender, setRenderState] = useState(true);

    useEffect(() => {
        // Calling pixi effect here to be able to have the canvas appear in segment
        pixiEffect(isInitialRender, setRenderState, height, width);
    })  

    
    return (
        <Segment attached='top' style={{ height: window.innerHeight }} id='canvasSegment'>
            <Container textAlign='left' id='titleContainer'> 
                <h1  id='titleText'>
                    Iustin Tapuc,<br/>
                    <span id='testing'>Front-End React Developer</span>
                </h1> 
                <Button inverted size='huge' id='invertedBtn'>
                    Tell Me About Your Project
                </Button>
            </Container>
            <canvas id='pixiRenderArea' width={width} height={height}></canvas>
        </Segment>
    )
}

export default Main;