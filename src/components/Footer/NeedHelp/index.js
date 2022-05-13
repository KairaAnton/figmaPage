import React from 'react';
import Button from '../../Button';
import support from '../../../images/support.png';
import bigSupport from '../../../images/big-support.png';
import TextTitle from '../../TextTitle';
import './index.scss';
import { useSelector } from 'react-redux';
 
const NeedHelp = () => {
const{h, btnContent}=useSelector(state=>state.content.needHelp)

    return (
        <section className='need-help'>
            <div className='need-help__container _container'>
                <TextTitle className='need-help__h1'>{h}</TextTitle>
                <img className='need-help__img' src={bigSupport} alt='logo' />
                <Button className='need-help__button'><img src={support} alt='logo'/>{btnContent}</Button>
            </div>
        </section>
    );
}
 
 
export default NeedHelp;