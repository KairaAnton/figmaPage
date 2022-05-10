import React from 'react';
import ArrowToDown from '../../ArrowToDown';
import SubNav from '../SubNav';
import styles from './CustomLi.module.scss';
 
const CustomLi = ({children}) => {
    
    return (
        <li className={styles.navLi}>{children} <ArrowToDown />
                <SubNav className={styles.subNav} />
            </li>
    );
}
 
 
export default CustomLi;