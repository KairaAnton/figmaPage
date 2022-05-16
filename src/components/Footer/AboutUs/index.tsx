import { FC } from 'react';
import { useAppSelector } from '../../../hooks';
import './index.scss';

const AboutUs: FC = () => {

    const { content } = useAppSelector(state => state.content.aboutUs);   
console.log('Array:>> ', Array.isArray(content)
);
    return (
        <section className='about-us'>
            <div className='about-us__container _container'>
                <article className='about-us__text-container'>
                    <span>{content[0]}</span>
                    <span>{content[1]}</span>
                </article>
            </div>

        </section>
    );
}


export default AboutUs;