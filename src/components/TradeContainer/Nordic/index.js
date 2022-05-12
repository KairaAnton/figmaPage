import React from 'react';
import TextParagraph from '../../TextParagraph';
import TextTitle from '../../TextTitle';
import './index.scss';
import NordicList from './NordicList';

const Nordic = () => {
    return (
        <section className='nordic'>
            <div className='nordic__container _container'>
                <TextTitle>Nordic Association of Brokers</TextTitle>
                <TextParagraph className='nordic__paragraph'>in 2020</TextParagraph>
                <NordicList/>
            </div>
        </section>
    );
}

export default Nordic;