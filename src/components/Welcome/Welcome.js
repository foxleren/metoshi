import React from 'react';
import {useIntl} from 'react-intl'

import './Welcome.css'

import Button from '../Button/Button'

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
            <Button size="big" variant="pink"
                    content={intl.formatMessage({id: 'welcome_enter_metoland'})}/>
            <Button size="big" variant="transparent"
                    content={intl.formatMessage({id: 'welcome_buy'}) + " $Meto"}/>
        </div>
    </section>)
}

export default Welcome