import { createReducer } from "@reduxjs/toolkit";
import { ReactNode } from "react";


type typeState = string | string[] | ReactNode

type II = {
    [key: string]: typeState
}

type IState = {
    [key: string]: II
}

const initialState: IState = {
    navBtnContent: { btnContent: 'Start trading' },
    language: { languages: ['Ru', 'uk', 'usa', 'pl'] },
    navText: { content: ['Instruments Categories', 'Tools', 'Company'] },
    tradeDemo: {
        h: 'Trade CFDs on Shares, Indices, Forex and Cryptocurrencies',
        p: 'Reliable, Simple, Innovative. Join millions who have already traded with Nordic Association of Brokers.',
        btnLeft: 'Start Trading Now',
        btnRight: 'Try Free Demo'
    },
    tradeTrust: {
        h: 'Trade with Trust',
        rules: [
            'Nordic Association of Brokers Ltd is a FTSE 250 company listed on the London Stock Exchange’s Main Market for Listed Companies',
            'Your funds are kept in segregated bank accounts',
            'Secured by SSL'
        ],
        btnContent: 'Read More About Us'
    },
    payment: { content: '* Some of the payment methods may not be available in your country' },
    takeControl: {
        h: 'Take Control',
        p: 'Use our advanced tools and features to gain control on your account:',
        list: ['Stop Limit / Stop Loss / Trailing Stop',
            'Guaranteed Stop', 'Negative balance protection',
            'FREE email & push notifications on market events',
            'Alerts on price movements, Change % & Traders’ Sentiments'],
        btnLeft: 'Go to Risk Manangement',
        btnRight: 'Go to Alerts'

    },
    exploreMarkets: {
        h: 'Explore Markets',
        p: 'Trade the world’s most popular markets and explore endless trading opportunities. We offer +2000 financial instruments, FREE real time quotes and dedicated round-the-clock customer support.',
        discover: 'Discover our Sector Indices',
        news: 'News and Market Insights',
        btnLeft: 'Learn More',
        btnRight: 'Watch Video'

    },
    tradersGuide: {
        h: `Trader's Guide`,
        p: 'Discover the basics of CFD trading and understand commonly-used terms by accessing our free and intuitive video guide.',
        btnContent: 'Watch Videos'
    },
    nordic: {
        h: 'Nordic Association of Brokers',
        p: 'in 2020',
        listOne: ['82+', 'Million', 'Positions opened'],
        listTwo: ['430+', 'Thousand', 'Active customers'],
        listThree: ['1700+', 'Billion $', 'Traded value']

    },

    trading: {
        h: 'Trading at your fingertips',
        p: 'Trade anywhere, anytime using our various platforms.',
        btnLeft: 'Start Trading Now',
        btnRight: 'Try Free Demo',
        android: 'Android App',
        windows: 'Windows 10 Trader',
        web: 'WebTrader',
    },
    needHelp: {
        h: 'Need Help?',
        btnContent: 'Support'
    },
    footerNav: {
        h: 'Уведомление о рисках:',
        p: <span>Операции, предлагаемые данным сайтом, могут осуществляться только совершеннолетними (18 +) и полностью дееспособными лицами.Операции с
            финансовыми инструментами, которые выполняются посредством этого сайта, могут относиться к операциям с высоким уровнем риска и повлечь за собой
            потерю вложенных средств.Перед принятием решения о начале торговли вы обязаны ознакомиться с Условиями и соглашениями об оказании услуг, а также с
            <a className='footer-nav__a' href='/#' > Уведомлением о рисках</a >,
            <a className='footer-nav__a' href='/#'> Политикой конфиденциальности</a>, <a className='footer-nav__a' href='/#'>Политикой AML</a> и
            < a className='footer-nav__a' href='/#' > Политикой KYC</ a>.</span >
    },
    aboutUs: {
        content: ['Neroport business center in 2300 Copenhagen, Denmark', '© 2015-2021']
    }
};

export default createReducer(initialState, {});