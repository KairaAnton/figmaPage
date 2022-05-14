import { FC } from 'react';
import './index.scss';
import Navigation from '../../Navigation';
import logo from './../../../images/logo.png';
import user from './../../../images/user.png';
import Button, { BtnType } from '../../Button';
import { useAppSelector } from '../../../hooks';


const NavBar: FC = () => {
    const { navBtnContent } = useAppSelector(state => state.content)

    return (
        <section className='nav-container'>
            <nav className='nav-container__header-nav _container'>
                <img src={logo} alt='logo' />
                <Navigation/>
                <article className='nav-container__login'>
                    <button className='nav-container__user-button'>
                        <img src={user} className='nav-container__userLogo' alt='logo' />
                        <span>Login</span>
                    </button>
                    <Button type={BtnType.blue} className='nav-container__button'>{navBtnContent}</Button>
                </article>
            </nav>
        </section>
    );
}


export default NavBar;