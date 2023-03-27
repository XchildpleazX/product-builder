import React from 'react';
import './Text.css';

export default function Text({
    fontFamily,
    fontSize,
    children
}) {
    return(
        <div className={fontFamily.replaceAll(' ', '') + ' FontSize-' +fontSize}>
            {children}
        </div>
    );
}