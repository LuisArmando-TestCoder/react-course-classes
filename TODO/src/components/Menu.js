import React from 'react';
import './Menu.css';

export default ({ items }) =>

<nav className='nav'>
    <ul>
        { items.map(({href = '#', content, click}) => 
            <li>
                <a onClick={click} href={href}>{content}</a>
            </li>
        ) }
    </ul>
</nav>