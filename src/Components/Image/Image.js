import React from 'react';
import Draggable from 'react-draggable';
import './Image.css';

export default function Image({
    path,
    imageSize
}) {
    return(
        <div className={'ImageSize-' + imageSize}>
            <Draggable>
                <img src={path}></img>
            </Draggable>
        </div>
    );
}