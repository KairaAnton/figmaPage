import React from 'react';
import monitor from '../../../images/monitor.png'
 
const TraderGuide = () => {
    return (
        <section className='trader-guide'>
            <div className='trader-guide__container'>
                <article className='guide-img__container'>
                    <div className='guide-img__ellipse'/>
                    <img src={monitor}  alt='logo'/>
                </article>
                <article className='guide-content-container'>

                </article>

            </div>
            
        </section>
    );
}
 
 
export default TraderGuide;