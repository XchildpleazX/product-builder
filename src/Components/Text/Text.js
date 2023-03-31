import React from 'react';
import Draggable from 'react-draggable';
import './Text.css';

export default function Text({
    fontFamily,
    fontSize,
    value
}) {
    return(
        <div className={fontFamily.replaceAll(' ', '') + ' FontSize-' +fontSize}>
            <Draggable>
                <div>{value}</div>
            </Draggable>
        </div>
    );
}