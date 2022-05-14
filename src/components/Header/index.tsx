import { FC } from 'react';
import './index.scss';
import NavBar from './NavBar';
import SerchBar from './SearchBar';

const Header: FC = () => {
    return (
        <header className='header'>
            <SerchBar />
            <NavBar />
        </header>
    );
}


export default Header;