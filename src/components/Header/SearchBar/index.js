import React from 'react';
import ArrowToDown from '../../ArrowToDown';
import ru from './../../../images/ru.png';
import glass from './../../../images/magnifyingGlass.png';
import './index.scss';


const SerchBar = () => {
    return (
        <section className='search-bar'>
            <article className='search-bar__sub-search'>
                <img src={glass} className='search-bar__glass' alt='logo' />
                <input className='search-bar__search' placeholder='Search' />
            </article>
            <article className='search-bar__language'>
                <img src={ru} alt='logo' />
                <span>Ru</span>
                <ArrowToDown />
            </article>
        </section>
    );
}


export default SerchBar;