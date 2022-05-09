import React from 'react';
import './index.scss';

const TextTitle = ({ content,className }) => {
    return (
        <h1 className={`text-title ${className}`}>
            {content}
        </h1>
    );
}


export default TextTitle;