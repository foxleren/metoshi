import React from 'react'
import {useIntl} from 'react-intl'

import './Popup.css'

import {closePopup} from './../../js/script'

function Popup() {
    let intl = useIntl()
    return (
        <div className="popup">
            <div className="popup_close" onClick={closePopup}></div>
            <div className="popup_content">
                <div className="popup_content_item">
                    <img src="./metoshi/images/redpanda3.png" alt=""/>
                </div>
                <div className="popup_content_desc">
                    <h2>{intl.formatMessage({id:'popup_name'})}</h2>
                    <p>
                        {intl.formatMessage({id:'popup_description'})}
                        <span>{intl.formatMessage({id:'popup_description_num'})}</span>
                    </p>
                    <div className="stats">
                        <div className="stat_item common">
                            <div className="stat_item_icon"></div>
                            <p>50%</p>
                            <span>Common</span>
                        </div>
                        <div className="stat_item unique">
                            <div className="stat_item_icon"></div>
                            <p>30%</p>
                            <span>Unique</span>
                        </div>
                        <div className="stat_item rare">
                            <div className="stat_item_icon"></div>
                            <p>20%</p>
                            <span>Rare</span>
                        </div>
                    </div>
                    <div className="button">{intl.formatMessage({id:'popup_buy_nft'})}</div>
                </div>
            </div>
        </div>
    )
}

export default Popup