import './index.scss';
import TextParagraph from '../../../TextParagraph';
import { useAppSelector } from '../../../../hooks'; import android from '../../../../images/android.png';
import windows from '../../../../images/windows.png';
import web from '../../../../images/web.png';

const TradingList = () => {

    const { tradingList } = useAppSelector(state => state.content.trading);

    const renderImage = (name: string) => {
        if (name === 'android') { return android };
        if (name === 'windows') { return windows };
        if (name === 'web') { return web };
    };

    console.log('typeof renderImage :>> ', typeof renderImage("android"));
    const renderList = tradingList.map(elem => <li key={elem.name} >
        <img className={`trading-list__${elem.name}`} src={renderImage(elem.name)} alt='logo' />
        <TextParagraph className='trading-list__paragraph'>{elem.text}</TextParagraph>
    </li>)


    return (
        <ul className='trading-list'>
            {renderList}

        </ul>
    );
}

export default TradingList;