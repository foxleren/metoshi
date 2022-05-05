import React from 'react';

import './Welcome.css'

function Welcome() {
    return (
        <section className="welcome">
            <div className="welcome_text">
                <h1>Metoland</h1>
                <h2>
                    Buy you
                    <span>metoland</span>
                    NFT!
                </h2>
                <div className="welcome_pet pet1"></div>
                <div className="welcome_pet pet2"></div>
            </div>
        </section>
    )
}

export default Welcome