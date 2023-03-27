import React, {useEffect} from 'react';
import './Select.css';

export default function Select({
    label,
    options,
    onChange
}) {
    return(
    <div>
        <label className='Select-Label'>{label}</label>
        <select className='Select' onChange={onChange}>
            {Object.keys(options).map((index) => (
                <option key={index} className='Select-Option'>
                    {options[index]}
                </option>
            )
            )}
        </select>
    </div>
  );
}
