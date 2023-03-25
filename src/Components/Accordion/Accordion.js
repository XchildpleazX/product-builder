import React, {useState} from 'react';
import './Accordion.css';

export default function Accordion({
    children,
    title
}) {
    const [open, setOpen] = useState(false);
    return(
        <div className="accordion-wrapper">
      
      <div
        className={`accordion-title ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
        >
        {title}
      </div>
      <div className={`accordion-item ${!open ? "collapsed" : ""}`}>
        <div className="accordion-content">{children}</div>
      </div>
    </div>
    );
}