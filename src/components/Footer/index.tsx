import { FC } from 'react';
import AboutUs from './AboutUs';
import FooterNav from './FooterNav';
import NeedHelp from './NeedHelp';

const Footer: FC = () => {
    return (
        <footer className="footer">
            <NeedHelp />
            <FooterNav />
            <AboutUs />
        </footer>
    );
}


export default Footer;