import React from 'react';

export default ({ items }) =>

<nav>
    <ul>
        { items.map(({href = '#', content, click}) => 
            <li>
                <a onClick={click} href={href}>{content}</a>
            </li>
        ) }
    </ul>
</nav>