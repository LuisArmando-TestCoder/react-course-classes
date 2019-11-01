import React from 'react';
import { NavLink } from 'react-router-dom';

export default (props) => 

<nav>
    <ul>
        {
            props.links.map((link, i) => <li key={i}><NavLink to={link}>{link.toUpperCase()}</NavLink></li>)
        }
    </ul>
</nav>