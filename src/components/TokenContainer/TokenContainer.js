import React from 'react'

import './TokenContainer.css'

function TokenContainer() {
    return(
        <div className="token-list-container">
            <div className="token-list-switcher">
                <div className="switcher-option-container">
                    <div className="switcher-option-item">
                        <a className="switcher-option-item-button-1 selected">NFT</a>
                    </div>
                </div>
                <div className="switcher-option-container">
                    <div className="switcher-option-item">
                        <a className="switcher-option-item-button-2">My Chest</a>
                    </div>
                </div>
                <div className="switcher-option-container">
                    <div className="switcher-option-item">
                        <a className="switcher-option-item-button-3">My NFT</a>
                    </div>
                </div>
            </div>
            <div className="tokens_list">
                <div className="token_item">
                    <div className="token_item_image">
                        <img src="/images/1.png" alt={"Builder's chest"}/>
                    </div>
                    <div className="token_item_name">Builder's chest</div>
                    <div className="token_item_desc">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </div>
                    <div className="token-quantity">12</div>
                    <div className="token_item_buy">
                        <div className="button show_popup">30.000 $METO</div>
                        <p className="token_item_amount">Available: -</p>
                    </div>
                </div>
                <div className="token_item">
                    <div className="token_item_image">
                        <img src="/images/2.png" alt={""}/>
                    </div>
                    <div className="token_item_name">Farmer's chest</div>
                    <div className="token_item_desc">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </div>
                    <div className="token-quantity">12</div>
                    <div className="token_item_buy">
                        <div className="button show_popup">30.000 $METO</div>
                        <p className="token_item_amount">Available: -</p>
                    </div>
                </div>
                <div className="token_item">
                    <div className="token_item_image">
                        <img src="/images/3.png" alt={""}/>
                    </div>
                    <div className="token_item_name">Lumberjack's chest</div>
                    <div className="token_item_desc">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </div>
                    <div className="token-quantity">12</div>
                    <div className="token_item_buy">
                        <div className="button show_popup">30.000 $METO</div>
                        <p className="token_item_amount">Available: -</p>
                    </div>
                </div>
                <div className="token_item">
                    <div className="token_item_image">
                        <img src="/images/4.png" alt={""}/>
                    </div>
                    <div className="token_item_name">Diggers's chest</div>
                    <div className="token_item_desc">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </div>
                    <div className="token-quantity">12</div>
                    <div className="token_item_buy">
                        <div className="button show_popup">30.000 $METO</div>
                        <p className="token_item_amount">Available: -</p>
                    </div>
                </div>
                <div className="token_item">
                    <div className="token_item_image">
                        <img src="/images/5.png" alt={""}/>
                    </div>
                    <div className="token_item_name">Miner's chest</div>
                    <div className="token_item_desc">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </div>
                    <div className="token-quantity">12</div>
                    <div className="token_item_buy">
                        <div className="button show_popup">30.000 $METO</div>
                        <p className="token_item_amount">Available: -</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TokenContainer