import React from 'react';
 
const Button = ({content, ...arg}) => {
    
    return (
        <button {...arg} >{content}</button>
    );
}
 

export default Button;