import React, {useEffect} from 'react';

export default function Select({
    label,
    options
}) {
    useEffect(() => {
        console.log(options);
     });
    return(
    <div>
        <label>{label}</label>
        <select>
            {Object.keys(options).map((index) => (
                <option>
                    {options[index]}
                </option>
            )
            )}
        </select>
    </div>
  );
}
