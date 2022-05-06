import React from 'react'

import './Popup.css'

import {closePopup} from '../../js/script.js'

function Popup(){

    return (
        <div className="popup">
            <div className="popup_close" onClick={closePopup}></div>
            <div className="popup_content">
                <div className="popup_content_item">
                    <img src="/images/redpanda3.png" alt=""/>
                </div>
                <div className="popup_content_desc">
                    <h2>Lumberjack</h2>
                    <p>
                        It is used to increase the bonus at the main building. When using a
                        panda in the game, the construction time of all buildings will be
                        reduced by
                        <span>30%-250%!</span>
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
                    <div className="button">Buy NFT</div>
                </div>
            </div>
        </div>
    )
}

export default Popup