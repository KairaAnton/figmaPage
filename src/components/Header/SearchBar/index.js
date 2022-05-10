import React from 'react';
import './index.scss';
import ArrowToDown from '../../ArrowToDown';
import ru from './../../../images/ru.png';
import glass from './../../../images/magnifyingGlass.png';

const SerchBar = () => {
    return (
        <section className='search-bar'>
            <div className="search-bar__container _container">
                <article className='search-bar__sub-search'>
                    <button className='search-bar__button'> {/*здесь кнопка*/}
                        <img src={glass} className='search-bar__glass' alt='logo' />
                    </button>
                    <input className='search-bar__search' placeholder='Search' />
                </article>
                <article className='search-bar__language'>
                    <img src={ru} alt='logo' />
                    <span>Ru</span>
                    <ArrowToDown />
                </article>
            </div>
        </section>
    );
}

export default SerchBar;