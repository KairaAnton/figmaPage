import React from 'react';
import { useSelector } from 'react-redux';
import './index.scss';

const AboutUs = () => {
const{aboutUs} =useSelector(state=>state.content)

    return (
        <section className='about-us'>
            <div className='about-us__container _container'>
                <article className='about-us__text-container'>
                <span>{aboutUs[0]}</span>
                <span>{aboutUs[1]}</span>
                </article>
            </div>

        </section>
    );
}


export default AboutUs;