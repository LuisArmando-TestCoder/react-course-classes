import React from 'react';

export default ({ label, id, otherProps = {} }) =>
<label htmlFor={id}>
    <span>{label}</span>
    {
        otherProps && otherProps.type !== 'textarea' ?
        <input {...otherProps} id={id}/>
        :
        <textarea {...otherProps} id={id}/>
    }
</label>
