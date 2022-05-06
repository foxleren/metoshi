import React from "react"
// import $ from 'jquery';
//import Script from '../../../js/script'
import {showPopup} from '../../../js/script.js'

function TableOfTokens(props) {
    return (<div className="tokens_list">
        {props.ListOfTokens.map((token, index) => (<div className="token_item" key={index}>
            <div className="token_item_image">
                <img src={token.img} alt=""/>
            </div>
            <div className="token_item_name">{token.name}</div>
            <div className="token_item_desc">{token.description}</div>
            <div className={"token-quantity " + (props.tabIndex === 1 ? "isVisible" : "")}>{token.quantity}</div>
            <div className="token_item_buy">
                <div className="button show_popup" {...(props.tabIndex === 0 && {onClick: showPopup})}
                >{props.tabIndex === 0 ? token.price + " $METO" : "Open box"}
                </div>
                <p className="token_item_amount">Available: {token.amount}</p>
            </div>
        </div>))}
    </div>)
}

export default TableOfTokens