import React from 'react';

import './Header.css'

function Header() {
    return (<header className="header">
            <div className="header_logo"></div>
            <nav className="header_menu">
                <a className="header_menu_item" href="">Home</a>
                <a className="header_menu_item" href="">Buy NFT</a>
                <a className="header_menu_item" href="">Whitepaper</a>
                <a className="header_menu_item" href="">Contacts</a>
            </nav>
            <div className="header_langs">
                <a className="header_lang_item">ENG</a>
                <a className="header_lang_item" href="https://metoshi.com/ru/">RUS</a>
            </div>
            <a className="header_contract" href="" target="_blank">
                0x16cd...f345
            </a>
            <div className="header_menu_trigger">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </header>)
}

export default Header;