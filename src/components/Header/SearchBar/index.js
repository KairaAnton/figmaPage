import React, { useState } from 'react';
import './index.scss';
import ArrowToDown from '../../ArrowToDown';
import glass from './../../../images/magnifyingGlass.png';

const SerchBar = () => {
    const arr = ['Ru', 'uk', 'usa','pl'];
    const renderDiv = (elem) => {
        return <div key={elem} className={`search-bar__div-${elem}`} >{elem}</div>
    };
    const [select, setSelect] = useState(renderDiv(arr[0]));
    const renderFunk = arr.map(elem => {
        const changeLanguage = <div onClick={() => setSelect(renderDiv(elem))}
            key={elem} className={`search-bar__div-${elem}`} >{elem}</div>;
        return changeLanguage;
    })

    return (
        <section className='search-bar'>
            <div className="search-bar__container _container">
                <article className='search-bar__sub-search'>
                    <button className='search-bar__button'>
                        <img src={glass} className='search-bar__glass' alt='logo' />
                    </button>
                    <input className='search-bar__search' placeholder='Search' />
                </article>
                <article className='search-bar__language-container'>
                    {select}
                    <div className='search-bar__select'>
                        {renderFunk}
                    </div>
                    <ArrowToDown className='search-bar__arrow' />
                </article>
            </div>
        </section>
    );
}

export default SerchBar;