import { FC } from 'react';
import './index.scss';
import TextParagraph from '../../TextParagraph';
import TextTitle from '../../TextTitle';
import secondPhones from '../../../images/secondPhones.png'
import Button, { BtnType } from '../../Button';
import { useAppSelector } from '../../../hooks';


const ExploreMarkets: FC = () => {
    const { h, p, discover, news, btnContent: { btnLeft, btnRight } } = useAppSelector(state => state.content.exploreMarkets);


    return (
        <section className='explore'>
            <div className='explore__container _container'>
                <article className='content-container'>
                    <TextTitle>{h}</TextTitle>
                    <TextParagraph className='content-container__paragraph' >{p}</TextParagraph>
                    <div className='content-container__span' >
                        <span className='content-container__discover'>{discover}</span><br />
                        <span className='content-container__news'>{news}</span>
                    </div>
                    <div className='content-container__button-container'>
                        <Button type={BtnType.blueBorder} >{btnLeft}</Button>
                        <Button type={BtnType.grayBorder} className='content-container__button-right' >{btnRight}</Button>
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