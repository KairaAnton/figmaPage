import { FC } from 'react';
import './index.scss';
import { useAppSelector } from '../../../hooks';
import Button, { BtnType } from '../../Button';
import TextTitle from '../../TextTitle';

const NeedHelp: FC = () => {
    const { h, btnContent } = useAppSelector(state => state.content.needHelp);
    const { support, bigSupport } = useAppSelector(state => state.images);

    return (
        <section className='need-help'>
            <div className='need-help__container _container'>
                <TextTitle className='need-help__h1'>{h}</TextTitle>
                <img className='need-help__img' src={bigSupport} alt='logo' />
                <Button type={BtnType.blueBorder} className='need-help__button'><img src={support} alt='logo' />{btnContent}</Button>
            </div>
        </section>
    );
}


export default NeedHelp;