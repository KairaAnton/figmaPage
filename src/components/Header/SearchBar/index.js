import React from 'react';
import ArrowToDown from '../../ArrowToDown';
import ru from './../../../images/ru.png';
import glass from './../../../images/magnifyingGlass.png';
import styles from './SearchBar.module.scss';


const SerchBar = () => {
    return (
        <section className={styles.searchBar}>
                <article className={styles.subSearch}>
                    <img src={glass} className={styles.glass} alt='logo'/>
                    <input className={styles.search} placeholder='Search'/>
                    </article>
                <article className={styles.language}>
                    <img src={ru} alt='logo'/>
                    <span>Ru</span>
                    <ArrowToDown/>
                    </article>
            </section>
    );
}
 
 
export default SerchBar;