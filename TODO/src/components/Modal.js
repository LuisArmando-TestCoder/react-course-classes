import React from 'react';
import './Modal.css';

export default ({message, no, yes, btn1 = 'No', btn2 = 'Yes'}) =>

<div className="modal">
    <p>{message}</p>
    <div>
        <button onClick={no}>{btn1}</button>
        <button onClick={yes}>{btn2}</button>
    </div>
</div>