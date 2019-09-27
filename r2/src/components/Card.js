import React from 'react';
import Image from './CardImage';
import Title from './Title';
import Paragraph from './Paragraph';
import './Card.css';

function unParseHTML(htmlString) {
    const parent = document.createElement('div');

    parent.innerHTML = htmlString;
    [...parent.querySelectorAll('script')]
    .forEach(script => script.remove());

    return parent.innerText;
}

const Card = ({ src, title, paragraph }) => (
    <div className='card col-sm-12 col-md-4'>
        <Image alt={ title } src={ src }/>
        <Title title={ title }/>
        <Paragraph paragraph={ unParseHTML(paragraph) }/>
    </div>
);

export default Card;
