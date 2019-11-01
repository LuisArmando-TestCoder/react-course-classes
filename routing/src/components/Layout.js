import React from 'react';
import Nav from './Nav';

export default (props) => 

<div>
    Header
    <Nav links={['/', '/about']}/>
    {props.children}
    <footer>Footer</footer>
</div>