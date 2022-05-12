import React from 'react';
import TextParagraph from '../../../TextParagraph';
import TextTitle from '../../../TextTitle';
import'./index.scss';


const NordicList = () => {
    const childrenList = [
        ['82+','Million','Positions opened'],
        ['430+','Thousand','Active customers'],
        ['1700+','Billion $','Traded value']
    ];

    const renderList = childrenList.map( arrLi => <li key={arrLi}>
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