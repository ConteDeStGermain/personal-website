import * as PIXI from 'pixi.js';

import originalJPG from '../images/original.jpg';
import imgMap from '../images/map.jpg';

export function pixiEffect(height, width ) {
    var renderArea = document.getElementById('pixiRenderArea');

    let app = new PIXI.Application({
        width: width, 
        height: height, 
        view: renderArea
    });

    var picWidth = width;
    var picHeight = (1067 * picWidth)/1600;
    var xAxis = 0;
    var yAxis = 0;  

    if (picHeight < height) {
        picWidth += 300;
        xAxis += 0.09;
        yAxis += 0.02;
        picHeight = (1067 * picWidth)/1600;
    } else {
        yAxis += 0.08;
    }

    let img = new PIXI.Sprite.from(originalJPG);
    img.anchor.set(xAxis, yAxis);
    img.width = picWidth;
    img.height = picHeight;
    app.stage.addChild(img);

    let depthMap = new PIXI.Sprite.from(imgMap);
    depthMap.anchor.set(xAxis, yAxis);
    depthMap.width = picWidth;
    depthMap.height = picHeight;
    app.stage.addChild(depthMap);
        
    let displacementFilter = new PIXI.filters.DisplacementFilter(depthMap);
    app.stage.filters = [displacementFilter];


    window.onmousemove = function(e) {
        // var distX = e.clientX - displacementFilter.scale.x;
        // var distY = e.clientY - displacementFilter.scale.y;

        // displacementFilter.scale.x += (distX * 0.03)
        // displacementFilter.scale.y += (distY * 0.03)

        // console.log(e)
        // console.log(displacementFilter.scale.y)
        
        displacementFilter.scale.x = (width /2 - e.clientX)  /20;
        displacementFilter.scale.y = (height /2 - e.clientY) /20;
    };

    return app;
};
