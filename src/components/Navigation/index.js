import React from 'react';
import './index.scss'
import CustomLi from './CustomLi';


const Navigation = () => {
    return (
        <ul className='navigation'>
            <CustomLi>Instruments Categories</CustomLi>
            <CustomLi>Tools</CustomLi>
            <CustomLi>Company</CustomLi>
        </ul>
    );
}


export default Navigation;