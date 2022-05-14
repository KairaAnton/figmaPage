import './index.scss';
import { FC, ReactNode } from 'react';
import ArrowToDown from '../../ArrowToDown';
import SubNav from '../SubNav';

interface IProps {
    children: ReactNode
};

const CustomLi: FC<IProps> = ({ children }) => {

    return (
        <li className='nav-li'>{children}
            <ArrowToDown className='nav-li__arrow' />
            <SubNav className='nav-li__sub-nav' />
        </li>
    );
};


export default CustomLi;