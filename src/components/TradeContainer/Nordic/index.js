import React from 'react';
import { useSelector } from 'react-redux';
import TextParagraph from '../../TextParagraph';
import TextTitle from '../../TextTitle';
import './index.scss';
import NordicList from './NordicList';

const Nordic = () => {
    const{h,p} = useSelector(state=>state.content.nordic)

    return (
        <section className='nordic'>
            <div className='nordic__container _container'>
                <TextTitle>{h}</TextTitle>
                <TextParagraph className='nordic__paragraph'>{p}</TextParagraph>
                <NordicList/>
            </div>
        </section>
    );
}

export default Nordic;