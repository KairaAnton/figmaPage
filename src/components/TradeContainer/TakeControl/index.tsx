import { FC } from 'react';
import './index.scss';
import { useAppSelector } from '../../../hooks';
import Button, { BtnType } from '../../Button';
import TextTitle from '../../TextTitle';

const TakeControl: FC = () => {
    const { h, p, list,btnLeft, btnRight } = useAppSelector(state => state.content.takeControl);
    const { firstLphone, firstRphone } = useAppSelector(state => state.images);

    const renderList = list.map((el) => <li key={el}>{el}</li>);

    return (
        <section className='take-controle'>
            <div className='take-controle__container _container'>
                <article className='control-img-container'>
                    <div className='control-img-container__ellipse' />
                    <img src={firstLphone} alt='logo' className='control-img-container__left-img' />
                    <img src={firstRphone} alt='logo' className='control-img-container__right-img' />
                </article>
                <article className='content-container'>
                    <TextTitle>{h}</TextTitle>
                    <span className='content-container__span-container'>{p}</span>
                    <ul className='content-container__list'>{renderList}</ul>
                    <div className='content-container__button-container'>
                        <Button type={BtnType.blueBorder}>{btnLeft}</Button>
                        <Button type={BtnType.grayBorder}>{btnRight}</Button>
                    </div>
                </article>
            </div>
        </section>
    );
};

export default TakeControl;