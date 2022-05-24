import React from 'react';
import {useIntl} from 'react-intl';

import './Header.css'

import {toggleHeaderMenu} from './metoshi/../../../js/script.js'

import ContractId from './../ContractId/ContractId'
import LanguagesMenu from './../LanguagesMenu/LanguagesMenu'

function Header(props) {
    const intl = useIntl()

    function SetRussian() {
        props.changeLanguage("Ru")
    }

    function SetEnglish() {
        props.changeLanguage("En")
    }

    return (<header className="header-container">
        <div className="header-top">
            <div className="header_logo"></div>
            <nav className="header_menu">
                <a className="header_menu_item" href="">{intl.formatMessage({id: 'header_menu_home'})}</a>
                <a className="header_menu_item" href="">{intl.formatMessage({id: 'header_menu_buy'})}</a>
                <a className="header_menu_item" href="">Whitepaper</a>
                <a className="header_menu_item" href="">{intl.formatMessage({id: 'header_menu_contacts'})}</a>
            </nav>
            <ContractId id={" 0x16cd...f345"}/>
            <div className="header_menu_trigger" onClick={toggleHeaderMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
        <div className="header-bottom">
            <LanguagesMenu size="big" changeLanguage={props.changeLanguage} selectedLocale={props.selectedLocale}/>
        </div>
    </header>)
}

export default Header;