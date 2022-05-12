import React from 'react';
import monitor from '../../../images/monitor.png'
import Button from '../../Button';
import TextParagraph from '../../TextParagraph';
import TextTitle from '../../TextTitle';
import './index.scss';

const TraderGuide = () => {
    return (
        <section className='trader-guide'>
            <div className='trader-guide__container _container'>
                <article className='trader-guide__img-container'>
                    <div className='trader-guide__ellipse' />
                    <img src={monitor} alt='logo' />
                </article>
                <article className='trader-guide__content'>
                    <TextTitle>Trader's Guide</TextTitle>
                    <TextParagraph className='trader-guide__paragraph'>Discover the basics of CFD trading and understand commonly-used terms by accessing our free and intuitive video guide.</TextParagraph>
                    <Button type='white' >Watch Videos</Button>
                </article>
                <div className='trader-guide__right-ellipse'/>
            </div>
        </section>
    );
}


export default TraderGuide;