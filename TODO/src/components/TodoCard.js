import React from 'react';
import Input from './Input';
import './TodoCard.css';

export default ({start, id, title, deadlineDate, deadlineHour, description, check, deleteItem, isFinished = false}) => 

<div className="todo">
    <h4>{title}</h4>
    <Input id={id} label='Is it finished?' otherProps={{ type: 'checkbox', onChange: check, checked: isFinished, }}/>
    <i><b>Posted date:</b> {start}</i>
    <p>{description}</p>
    <i><b>Deadline date:</b> {deadlineDate}</i>
    <i><b>Deadline hour:</b> {deadlineHour}</i>
    <button onClick={deleteItem}>Delete</button>
</div>