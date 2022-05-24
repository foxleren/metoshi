import React from "react"
import './TokenContainer.css'
import './../Button/Button'
import {showPopup} from "../../js/script";

function TokenSlot(props) {
    return (<div className="token-item-container">
        <div className="token-item">
            <div className="token-item-name">{props.name}</div>
            <div className="token-item-description-container">
                <div className="token-item-image">
                    <img src={props.img} alt=""/>
                </div>
                <div className="token-item-desc">{props.description}</div>
            </div>
            {props.tabIndex === 1 ? <div className={"token-quantity isVisible"}>{props.quantity}</div> : null}
            <div className="token-item-buy">
                <div
                    className="button transparent show-popup" {...(props.tabIndex === 0 && {
                    onClick: showPopup
                })}>
                    {props.tabIndex === 0 ? props.tokenPrice + " $METO" : props.openMessage}
                </div>
                {props.tabIndex === 0 ?
                    <p className="token-item-amount">{props.chestAvailable}: {props.amount}</p> : null}
            </div>
        </div>
        {props.tabIndex === 0 ? <div className="token-item-comment-container">
            <div className="token-item-comment-arrow">
                <svg className="token-item-comment-arrow" width="24" height="60" viewBox="0 0 24 60"
                     fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M10.9393 59.0607C11.5251 59.6464 12.4749 59.6464 13.0607 59.0607L22.6066 49.5147C23.1924 48.9289 23.1924 47.9792 22.6066 47.3934C22.0208 46.8076 21.0711 46.8076 20.4853 47.3934L12 55.8787L3.51472 47.3934C2.92893 46.8076 1.97919 46.8076 1.3934 47.3934C0.807614 47.9792 0.807614 48.9289 1.3934 49.5147L10.9393 59.0607ZM10.5 6.55671e-08L10.5 58L13.5 58L13.5 -6.55671e-08L10.5 6.55671e-08Z"
                        fill="#9A93B1" fillOpacity="0.46"/>
                </svg>
            </div>
            <div className="token-item-comment-text">
                {props.accelerates}
            </div>
            <span>{props.acceleratorObject}</span>
            <svg className="token-item-comment-frame" width="47" height="26" viewBox="0 0 47 26" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path d="M0 25H46V0" stroke="#9A93B3" strokeOpacity="0.45" strokeWidth="2"/>
            </svg>
        </div> : null}
    </div>)
}

export default TokenSlot