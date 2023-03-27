import React, {useState} from 'react';
import './Draggable.css';

export default function Draggable({
    children
}) {
    const [posX, setPosX] = useState(0);
    const [posY, setPosY] = useState(0);
    const handleDragEnd = (event) => {
        setPosX(event.clientX);
        setPosY(event.clientY);
    };
    return(
        <div
            className='Draggable-Container'
            draggable
            onDragEnd={handleDragEnd}
            style={{
                position: "absolute",
                left: posX,
                top: posY,
                zIndex: 1
            }}
        >
            {children}
        </div>
    );
}