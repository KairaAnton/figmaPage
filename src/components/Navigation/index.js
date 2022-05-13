import React from 'react';
import './index.scss'
import CustomLi from './CustomLi';
import { useSelector } from 'react-redux';



const Navigation = () => {
    const content = useSelector(state => state.content.navText);
    const renderNav = content.map(str => <CustomLi key={str}>{str}</CustomLi>);

    return (
        <ul className='navigation'>
            {renderNav}
        </ul>
    );
}


export default Navigation;