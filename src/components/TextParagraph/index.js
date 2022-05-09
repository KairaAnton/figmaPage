import React from 'react';
import './index.scss';

const TextParagraph = ({ content, className}) => {
    return (
        <p className={`paragraph ${className} `}>
            {content}
        </p>
    );
}


export default TextParagraph;