import { FC } from 'react';
import './index.scss';
import { useAppSelector } from '../../../hooks';
import TextParagraph from '../../TextParagraph';
import TextTitle from '../../TextTitle';
import NordicList from './NordicList';

const Nordic: FC = () => {
    const{h,p} = useAppSelector(state=>state.content.nordic)

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