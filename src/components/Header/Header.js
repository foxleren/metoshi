import React from 'react';

import './Header.css'
import {toggleHeaderMenu} from '../../js/script.js'

import {useIntl} from 'react-intl';

function Header(props) {
    let intl = useIntl()
    function SetRussian() {
        props.changeLanguage("Ru")
    }
    function SetEnglish(){
        props.changeLanguage("En")
    }
    return (
        <header className="header-container">
            <div className="header-top">
                <div className="header_logo"></div>
                <nav className="header_menu">
                    <a className="header_menu_item" href="">{intl.formatMessage({id:'header_menu_home'})}</a>
                    <a className="header_menu_item" href="">{intl.formatMessage({id:'header_menu_buy'})}</a>
                    <a className="header_menu_item" href="">Whitepaper</a>
                    <a className="header_menu_item" href="">{intl.formatMessage({id:'header_menu_contacts'})}</a>
                </nav>
                <a className="header_contract" href="" target="_blank">
                    0x16cd...f345
                </a>
                <div className="header_menu_trigger" onClick={toggleHeaderMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className="header-bottom">
                <div className="header_langs">
                    <div className={props.selectedLocale !== 'Ru'? "header_lang_item selected": "header_lang_item"} onClick={SetEnglish} >ENG</div>
                    <div className={props.selectedLocale === 'Ru'? "header_lang_item selected": "header_lang_item"} onClick={SetRussian}>RUS</div>
                </div>
            </div>
        </header>
    )
}

export default Header;