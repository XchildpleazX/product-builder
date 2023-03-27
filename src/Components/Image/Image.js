import React from 'react';

export default function Image({
    path
}) {
    return(
        <div>
            <img file_url={path}></img>
        </div>
    );
}