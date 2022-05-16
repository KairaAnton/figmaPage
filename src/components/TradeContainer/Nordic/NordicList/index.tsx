import { FC } from 'react';
import './index.scss';
import { useAppSelector } from '../../../../hooks';
import TextParagraph from '../../../TextParagraph';
import TextTitle from '../../../TextTitle';


const NordicList: FC = () => {
    const { listOne,listTwo,listThree } = useAppSelector(state => state.content.nordic);
    let keyLi = 0;
    const list = [listOne,listTwo,listThree]
    const renderList = list.map(arrLi => <li key={keyLi++}>
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