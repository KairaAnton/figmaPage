import React from 'react';
import { useSelector } from 'react-redux';
import TextParagraph from '../../../TextParagraph';
import TextTitle from '../../../TextTitle';
import'./index.scss';


const NordicList = () => {
    const{list} = useSelector(state=>state.content.nordic)

    const renderList = list.map( arrLi => <li key={arrLi}>
        <TextTitle className='nordic-list__h1'>{arrLi[0]}</TextTitle>
        <TextTitle className='nordic-list__h2'>{arrLi[1]}</TextTitle>
        <TextParagraph className='nordic-list__paragraph'>{arrLi[2]}</TextParagraph>
    </li>);

return (
        <ul className='nordic-list'>
           {renderList}
        </ul>
    );
}

export default NordicList;