import React, {useState} from 'react';
import './LivePreview.css';

export default function LivePreview({
    children
}) {
    return(
        <div className='LivePreview-Image'>
            {children}
        </div>
    );
}