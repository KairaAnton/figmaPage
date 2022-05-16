import { createReducer } from "@reduxjs/toolkit";
import logo from "../images/logo.png";
import user from '../images/user.png';
import safe from '../images/safe.png';
import column from '../images/column.png';
import lock from '../images/lock.png';
import visa from '../images/visa.svg';
import mastercard from '../images/mastercard.svg';
import paypal from '../images/paypal.svg';
import transfer from '../images/transfer.svg';
import skill from '../images/skill.svg';
import deal from '../images/deal.svg';
import bpay from '../images/bpay.svg';
import klarna from '../images/klarna.svg';
import giropay from '../images/giropay.svg';
import trusli from '../images/trusli.svg';
import przelewy from '../images/przelewy.svg';
import mb from '../images/mb.svg';
import mybank from '../images/mybank.svg';
import blik from '../images/blik.svg';
import firstLphone from '../images/firstLphone.png';
import firstRphone from '../images/firstRphone.png';
import secondPhones from '../images/secondPhones.png';
import monitor from '../images/monitor.png'
import android from '../images/android.png';
import windows from '../images/windows.png';
import web from '../images/web.png';
import support from '../images/support.png';
import bigSupport from '../images/big-support.png';
import noteRight from '../images/noteRight.png';
import arrow from '../images/arrow.png';
import glass from '../images/magnifyingGlass.png';


interface IState {
    [key: string]: string
}

const initialState: IState = {
    logo, user, safe, column, lock, visa, mastercard, paypal, transfer, skill, deal, bpay,
    klarna, giropay, trusli, przelewy, mb, mybank, blik, firstLphone, firstRphone,glass,
    secondPhones, monitor, android, web, windows, support, bigSupport, noteRight, arrow
}

export default createReducer(initialState, {});