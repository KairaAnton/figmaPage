import './index.scss';
import { useAppSelector } from '../../../hooks';
import monitor from '../../../images/monitor.png'
import Button, { BtnType } from '../../Button';
import TextParagraph from '../../TextParagraph';
import TextTitle from '../../TextTitle';
import { FC } from 'react';

const TraderGuide: FC = () => {
    const { h, p, btnContent } = useAppSelector(state => state.content.tradersGuide);

    return (
        <section className='trader-guide'>
            <div className='trader-guide__container _container'>
                <article className='trader-guide__img-container'>
                    <div className='trader-guide__ellipse' />
                    <img src={monitor} alt='logo' />
                </article>
                <article className='trader-guide__content'>
                    <TextTitle>{h}</TextTitle>
                    <TextParagraph className='trader-guide__paragraph'>{p}</TextParagraph>
                    <Button type={BtnType.blueBorder} >{btnContent}</Button>
                </article>
                <div className='trader-guide__right-ellipse' />
            </div>
        </section>
    );
}


export default TraderGuide;