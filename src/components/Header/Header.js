import React from 'react';

import './Header.css'
import {toggleHeaderMenu} from '../../js/script.js'

function Header() {
    return (
        <header className="header-container">
            <div className="header-top">
                <div className="header_logo"></div>
                <nav className="header_menu">
                    <a className="header_menu_item" href="">Home</a>
                    <a className="header_menu_item" href="">Buy NFT</a>
                    <a className="header_menu_item" href="">Whitepaper</a>
                    <a className="header_menu_item" href="">Contacts</a>
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
                    <a className="header_lang_item">ENG</a>
                    <a className="header_lang_item" href="https://metoshi.com/ru/">RUS</a>
                </div>
            </div>
        </header>
    )
}

export default Header;