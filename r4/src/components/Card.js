import React, { useState } from 'react';
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

const Card = (props) => {
    const [star, setStar] = useState(false);
    console.log(props.disappear);
    return (
        <div className={`card ${!star && props.disappear ? 'starred' : null}`}>
            <Image alt={ props.title } src={ props.src }/>
            <Title title={ props.title }/>
            <button data-custom-favorite={star} onClick={() => setStar(!star)}>
                star?
            </button>
            <Paragraph paragraph={ unParseHTML(props.paragraph) }/>
        </div>
    );
};

export default Card;
