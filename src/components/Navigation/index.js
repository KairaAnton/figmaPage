import React from 'react';
import styles from './Navigation.module.scss'
import CustomLi from './CustomLi';

/*нужно поменять файлик со стилями*/

const Navigation = () => {
    return (
        <ul className={styles.navigation}>
            <CustomLi content="Instruments Categories " />
            <CustomLi content="Tools" />
            <CustomLi content="Company" />
        </ul>
    );
}


export default Navigation;