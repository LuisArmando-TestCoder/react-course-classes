import React from 'react';
import './CardImage.css'

const Image = ({ src, alt }) => (
    <img src={ src } alt={ alt } className="img"/>
);

export default Image;
