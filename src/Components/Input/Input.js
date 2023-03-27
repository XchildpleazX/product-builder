import React from 'react';
import './Input.css';

export default function Input({
    label,
    type,
    onChange
}) {
    return(
        <div className='Input-Wrapper'>
            <label className='Input-Label'>{label}</label>
            <input className='Input' type={type} onChange={onChange}></input>
        </div>
    );
}