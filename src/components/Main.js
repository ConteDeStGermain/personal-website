import React, { useEffect, useRef } from 'react';
import { Segment, Container, Button } from 'semantic-ui-react';
import Fade from 'react-reveal/Fade';

import { pixiEffect } from './pixiEffect.js';
import '../componentsCSS/Main.css';
import '../componentsCSS/Layout.css';


const Main = ({ height, width, pageTitle }) => {
    const pixieApp = useRef(null);

    useEffect(() => {
        // Calling pixi effect here to be able to have the canvas appear in segment
        pixieApp.current = pixiEffect(height, width);

        return () => {
                if (pixieApp.current !== null) {
                    pixieApp.current.destroy();
                }
            }
    }, [])

    
    return (
        <Fade>
            <Segment attached='top' style={{ height: window.innerHeight }} id='canvasSegment'>
                <Container textAlign='left' id='titleContainer'> 
                    {pageTitle}
                    <Button 
                        inverted 
                        size='huge' 
                        id='invertedBtn'
                        onClick={() => window.location = 'mailto:itapuc7@gmail.com'}
                    >
                        Tell Me About Your Project
                    </Button>
                </Container>
                <canvas id='pixiRenderArea' width={width} height={height}></canvas>
            </Segment>
        </Fade>
    )
}

export default Main;