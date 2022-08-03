import React from 'react';
import {useIntl} from 'react-intl';

import './Header.css'

import {toggleHeaderMenu} from './metoshi/../../../js/script.js'
import LanguagesMenu from './../LanguagesMenu/LanguagesMenu'
import Button from "../Button/Button";

function Header(props) {
    const intl = useIntl()

    return (<header className="header-container">

        <div className="header-top">
            <div className="header-left-container">
                <div className="header-logo-img-container">
                    <div className="header-logo-img"/>
                </div>
                <div>
                    <div className="header-logo"/>
                    <LanguagesMenu size="big" changeLanguage={props.changeLanguage} selectedLocale={props.selectedLocale}/>
                </div>
            {/*<div className="header-bottom">*/}

                {/*</div>*/}
            </div>

            <nav className="header-menu">
                <a className="header-menu-item" href="">{intl.formatMessage({id: 'perks'})}</a>
                <a className="header-menu-item" href="">{intl.formatMessage({id: 'gameplay'})}</a>
                <a className="header-menu-item" href="">{intl.formatMessage({id: 'roadmap'})}</a>
                <a className="header-menu-item" href="">{intl.formatMessage({id: 'contacts'})}</a>
            </nav>
            {/*<ContractId id={" 0x16cd...f345"}/>*/}
            {/*<ContractId id={" 0x16cd...f345"}/>*/}
            <div className="header-buttons-container">
                <Button size="big" fontSize="sm-size" variant="transparent" hasIcon
                        content={intl.formatMessage({id: 'buy_meto'})}/>
                <Button size="big" fontSize="sm-size" variant="transparent"
                        content={intl.formatMessage({id: 'connect_wallet'})}/>
            </div>

            <div className="header-menu-trigger" onClick={toggleHeaderMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>


        </div>

    </header>)
}

export default Header;