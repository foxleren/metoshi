import React from 'react'

import './Footer.css'

function Footer() {
    return (<footer className="footer">
        <p className="copy">©Metoshi, 2021</p>
        <div className="botmenu">
            <ul>
                <li data-id="welcome" className="parent">
                    <a>Our products</a>
                    <ul>
                        <li>
                            <a href="https://metoshi.com#GameFi">
                <span>
                  <img src="/images/prod_devices_s.svg" alt=""/>
                </span>
                                GameFi
                            </a>
                        </li>
                        <li>
                            <a href="https://metoshi.com#decencomics">
                <span>
                  <img src="/images/prod_documents_s.svg" alt=""/>
                </span>
                                Comics
                            </a>
                        </li>
                        <li>
                            <a href="https://metoshi.com#Farm">
                                <span><img src="/images/prod_fin_s.svg" alt=""/></span>
                                Farm
                            </a>
                        </li>
                        <li>
                            <a className="soon">
                <span>
                  <img src="/images/prod_buildings_s.svg" alt=""/>
                </span>
                                Marketplace
                                <i>Soon</i>
                            </a>
                        </li>
                        <li>
                            <a className="soon">
                <span>
                  <img src="/images/prod_finance_s.svg" alt=""/>
                </span>
                                Metoshi Swap
                                <i>Soon</i>
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a className="link" href="https://metoshi.com/finance.html">Finance</a>
                </li>
                <li>
                    <a className="link" href="https://metoshi.com#decencomics">Comics</a>
                </li>
                <li>
                    <a className="link" href="https://metoshi.com#tokenomics">Tokenomics</a>
                </li>
                <li>
                    <a className="link" href="http://whitepaper.metoshi.com">Whitepaper</a>
                </li>
                <li>
                    <a className="link" href="https://metoshi.com#contacts">Contacts</a>
                </li>
            </ul>
        </div>
        <div id="bot_r">
            <div className="lang">
                <p>ENG</p>
                <span className="sep"></span>
                <a href="https://metoshi.com/ru/">RUS</a>
            </div>
        </div>
    </footer>)
}

export default Footer