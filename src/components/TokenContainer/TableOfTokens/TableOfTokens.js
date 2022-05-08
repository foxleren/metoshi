import React from "react"
import {showPopup} from '../../../js/script.js'
import {useIntl} from 'react-intl'
// const intl = useIntl()

function TableOfTokens(props) {
    // const intl = useIntl()

    function Translate(token) {
        // const intl = useIntl()
        let translatedTokenInfo = {
            name: '',
            description: '',
            accelerates: '',
            accelerator_object: ''
        }
        if (token.chestId === 1) {
            translatedTokenInfo.name = intl.formatMessage({id: 'farmer_chest'})
            translatedTokenInfo.description = intl.formatMessage({id:'farmer_chest_description'})
            translatedTokenInfo.accelerator_object = intl.formatMessage({id: 'farmer_chest_accelerator_object'})
        } else if (token.chestId === 2) {
                translatedTokenInfo.name = intl.formatMessage({id: 'lumberjack_chest'})
                translatedTokenInfo.description = intl.formatMessage({id:'lumberjack_chest_description'})
                translatedTokenInfo.accelerator_object = intl.formatMessage({id: 'lumberjack_chest_accelerator_object'})
        } else if (token.chestId === 3) {
            translatedTokenInfo.name = intl.formatMessage({id: 'digger_chest'})
            translatedTokenInfo.description = intl.formatMessage({id:'digger_chest_description'})
            translatedTokenInfo.accelerator_object = intl.formatMessage({id: 'digger_chest_accelerator_object'})
        }else if (token.chestId === 4) {
            translatedTokenInfo.name = intl.formatMessage({id: 'miner_chest'})
            translatedTokenInfo.description = intl.formatMessage({id:'miner_chest_description'})
            translatedTokenInfo.accelerator_object = intl.formatMessage({id: 'miner_chest_accelerator_object'})
        }
        translatedTokenInfo.accelerates = intl.formatMessage({id:'chest_accelerates'})

        return translatedTokenInfo
    }

    const intl = useIntl()
    return (<div className="tokens-list">
        {props.ListOfTokens.map(function (token, index) {
            let tokenInfo = Translate(token)
            return (<div className="token-item-container" key={index}>
                <div className="token-item">
                    <div className="token-item-name">{tokenInfo.name}</div>
                    <div className="token-item-image">
                        <img src={token.img} alt=""/>
                    </div>
                    <div className="token-item-desc">{tokenInfo.description}</div>
                    {props.tabIndex === 1 ? <div className={"token-quantity isVisible"}>{token.quantity}</div> : null}
                    <div className="token-item-buy">
                        <div className="button show-popup" {...(props.tabIndex === 0 && {onClick: showPopup})}>
                            {props.tabIndex === 0 ? intl.formatNumber(token.price) + " $METO" : intl.formatMessage({id:'chest_open'})}
                        </div>
                        {props.tabIndex === 0 ?  <p className="token-item-amount">{intl.formatMessage({id:'chest_available'})}: {token.amount}</p> : null}
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
                        {tokenInfo.accelerates}
                    </div>
                    <span>{tokenInfo.accelerator_object}</span>
                    <svg className="token-item-comment-frame" width="47" height="26" viewBox="0 0 47 26" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 25H46V0" stroke="#9A93B3" strokeOpacity="0.45" strokeWidth="2"/>
                    </svg>
                </div> : null}
            </div>)
        })}
        {props.tabIndex !== 0 && props.ListOfTokens.length < 10 ? Array(10 - props.ListOfTokens.length).fill(0).map((item, index) => (
            <div className="empty-token-item" key={index}>
                <img className="empty-token-icon" src="/images/locker.svg" alt=""/>
            </div>)) : null}
    </div>)
}

export default TableOfTokens