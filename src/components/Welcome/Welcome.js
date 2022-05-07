import React from 'react';
import { FormattedMessage } from 'react-intl'

import './Welcome.css'

function Welcome() {
    return (<section className="welcome">
        <div className="welcome_text">
            <h1>Metoland</h1>
            <h2>Buy you<span> metoland</span> NFT!</h2>
            <div className="welcome_pet pet1"></div>
            <div className="welcome_pet pet2"></div>
        </div>
        <div className="welcome-button-container">

            <div className="button-enter-metoland">
                 Enter Metoland</div>
            <div className="button-buy-meto">Buy $Meto</div>
        </div>
    </section>)
}

export default Welcome