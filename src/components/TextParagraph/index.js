import React from 'react';
import './index.scss';

const TextParagraph = ({ children, className}) => {
    return (
        <p className={`paragraph ${className} `}>
            {children}
        </p>
    );
}


export default TextParagraph;