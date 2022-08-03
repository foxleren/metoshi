import React from 'react';

import './Button.css'

function Button({content, size, variant, fontSize = "md-size", hasIcon = false, iconUrl = null}) {
    return (<div className="button-box">
        <div className={"button " + size + " " + variant + " " + fontSize}>
            {content}
            {hasIcon && <div className="button-icon" style={{background: "url(/images/buy_meto.svg) no-repeat" }}/>}
        </div>

    </div>)
}

export default Button