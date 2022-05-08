import React from 'react';
import ArrowToDown from '../../ArrowToDown';
import SubNav from '../SubNav';
import styles from './CustomLi.module.scss';
 
const CustomLi = ({content}) => {
    
    return (
        <li className={styles.navLi}>{content} <ArrowToDown />
                <SubNav className={styles.subNav} />
            </li>
    );
}
 
 
export default CustomLi;