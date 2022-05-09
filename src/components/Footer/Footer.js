import React from 'react'
import {useIntl} from 'react-intl'
import './Footer.css'

function Footer(props) {
    function SetRussian() {
        props.changeLanguage("Ru")
    }

    function SetEnglish() {
        props.changeLanguage("En")
    }

    let intl = useIntl()
    return (<footer className="footer">

        <p className="copy">©Metoshi, 2021</p>
        <div className="botmenu">
            <ul>
                <li data-id="welcome" className="parent">
                    <a>{intl.formatMessage({id: 'footer_our_products'})}</a>
                    <ul>
                        <li>
                            <a href="https://metoshi.com#GameFi">
                                <span>
                                  <img src="./images/prod_devices_s.svg" alt=""/>
                                </span>GameFi
                            </a>
                        </li>
                        <li>
                            <a href="https://metoshi.com#decencomics">
                                <span>
                                  <img src="./images/prod_documents_s.svg" alt=""/>
                                </span>{intl.formatMessage({id: 'footer_our_products_comics'})}
                            </a>
                        </li>
                        <li>
                            <a href="https://metoshi.com#Farm">
                                <span><img src="./images/prod_fin_s.svg" alt=""/></span>
                                {intl.formatMessage({id: 'footer_our_products_farm'})}
                            </a>
                        </li>
                        <li>
                            <a className="soon">
                                <span>
                                  <img src="./images/prod_buildings_s.svg" alt=""/>
                                </span>Marketplace
                                <i>{intl.formatMessage({id: 'footer_our_products_soon'})}</i>
                            </a>
                        </li>
                        <li>
                            <a className="soon">
                                <span>
                                  <img src="./images/prod_finance_s.svg" alt=""/>
                                </span>
                                Metoshi Swap
                                <i>{intl.formatMessage({id: 'footer_our_products_soon'})}</i>
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a className="link"
                       href="https://metoshi.com/finance.html">{intl.formatMessage({id: 'footer_red_panda'})}
                    </a>
                </li>
                <li>
                    <a className="link"
                       href="https://metoshi.com#tokenomics">{intl.formatMessage({id: 'footer_tokenomics'})}
                    </a>
                </li>
                <li>
                    <a className="link" href="">{intl.formatMessage({id: 'footer_roadmap'})}</a>
                </li>
                <li>
                    <a className="link" href="http://whitepaper.metoshi.com">Whitepaper</a>
                </li>
                <li>
                    <a className="link"
                       href="https://metoshi.com#contacts">{intl.formatMessage({id: 'footer_contacts'})}
                    </a>
                </li>
            </ul>
        </div>
        <div id="bot_r">
            <div className="langs">
                <div className={props.selectedLocale !== 'Ru' ? "lang_item selected" : "lang_item"}
                     onClick={SetEnglish}>ENG
                </div>
                <div className={props.selectedLocale === 'Ru' ? "lang_item selected" : "lang_item"}
                     onClick={SetRussian}>RUS
                </div>
            </div>
        </div>
    </footer>)
}

export default Footer