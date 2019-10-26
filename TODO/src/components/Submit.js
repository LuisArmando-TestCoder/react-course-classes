import React from 'react';

export default ({ submit, content }) =>

<button onClick={e => {
    e.preventDefault();
    submit(e);
}} type='submit'>{content}</button>