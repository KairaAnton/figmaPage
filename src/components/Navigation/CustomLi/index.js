import React from 'react';
import ArrowToDown from '../../ArrowToDown';
import SubNav from '../SubNav';
import './index.scss';

const CustomLi = ({ children }) => {

    return (
        <li className='nav-li'>{children}
            <ArrowToDown className='nav-li__arrow' />
            <SubNav className='nav-li__sub-nav' />
        </li>
    );
}


export default CustomLi;