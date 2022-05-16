import { FC } from 'react';
import './index.scss';
import CustomLi from './CustomLi';
import { useAppSelector } from '../../hooks';


const Navigation: FC = () => {
    const {content} = useAppSelector(state => state.content.navText);
    const renderNav = content.map(str => <CustomLi key={str}>{str}</CustomLi>);

    return (
        <ul className='navigation'>
            {renderNav}
        </ul>
    );
}


export default Navigation;