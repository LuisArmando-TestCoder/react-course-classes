import React from 'react';

export default ({ submit }) =>

<button onClick={e => {
    e.preventDefault();
    submit(e);
}} type='submit'>Upload todo</button>