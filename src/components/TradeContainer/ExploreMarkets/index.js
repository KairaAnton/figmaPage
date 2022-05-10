import React from 'react';
import TextParagraph from '../../TextParagraph';
import TextTitle from '../../TextTitle';
import secondPhones from '../../../images/secondPhones.png'
import Button from '../../Button';
import './index.scss';


const ExploreMarkets = () => {


    return (
        <section className='explore'>
            <div className='explore__container _container'>
                <article className='content-container'>
                    <TextTitle>Explore Markets</TextTitle>
                    <TextParagraph className='content-container__paragraph' >Trade the world’s most popular markets and explore endless trading opportunities. We offer +2000 financial instruments, FREE real time quotes and dedicated round-the-clock customer support.</TextParagraph>
                    <div className='content-container__span' >
                        <span className='content-container__discover'>Discover our Sector Indices</span><br />
                        <span className='content-container__news'>News and Market Insights</span>
                    </div>
                    <div className='content-container__button-container'>
                        <Button type='white' >Learn More</Button>
                        <Button type='white' className='content-container__button-right' >Watch Video</Button>
                    </div>
                </article>
                <article className='explore-img-container'>
                    <div className='explore-img-container__ellipse-blue'>
                        <div className='explore-img-container__ellipse-white' />
                    </div>
                    <img src={secondPhones} alt='logo' className='explore-img-container__second-phones' />
                </article>
            </div>
        </section>
    );
}


export default ExploreMarkets;