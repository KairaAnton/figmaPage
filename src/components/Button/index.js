import React from 'react';
import './index.scss';

//здесь нужен файлик со стилями , также можно указать тип кнопки , и при передачи в аргументи тот или
/* иной тип делать активным тот или иной клас*/

const Button = ({children,className,type, ...arg}) => {

    return (
        <button className={`${type==='blue'?'blue-btn':'white-btn'} ${className}`} {...arg}
        >{children}</button>
    );
}
 

export default Button;