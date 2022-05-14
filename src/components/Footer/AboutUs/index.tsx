import { FC } from 'react';
import { useAppSelector } from '../../../hooks';
import './index.scss';

const AboutUs: FC = () => {
    const { aboutUs } = useAppSelector(state => state.content);

    return (
        <section className='about-us'>
            <div className='about-us__container _container'>
                <article className='about-us__text-container'>
                    <span>{aboutUs[0]}</span>
                    <span>{aboutUs[1]}</span>
                </article>
            </div>

        </section>
    );
}


export default AboutUs;