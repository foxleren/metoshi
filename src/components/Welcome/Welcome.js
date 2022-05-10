import React from 'react';
import {useIntl} from 'react-intl'

import './Welcome.css'

function Welcome() {
    let intl = useIntl()
    return (<section className="welcome">
        <div className="welcome_text">
            <h1>Metoland</h1>
            <h2>
                {intl.formatMessage({id: 'welcome_buy_your_nft'})}
            </h2>
            <div className="welcome_pet pet1"></div>
            <div className="welcome_pet pet2"></div>
        </div>
        <div className="welcome-button-container">
            <div className="welcome-button-box">
                <div className="button-enter-metoland">
                    <div>
                        {intl.formatMessage({id: 'welcome_enter_metoland'})}
                    </div>
                </div>
            </div>
            <div className="welcome-button-box">
                <div className="button-buy-meto">
                    <div>
                        {intl.formatMessage({id: 'welcome_buy'})} $Meto
                    </div>
                </div>
            </div>
        </div>
    </section>)
}

export default Welcome