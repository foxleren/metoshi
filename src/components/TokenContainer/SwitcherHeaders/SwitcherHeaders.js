import React from 'react'

import TokenContainer from "../TokenContainer";

function SwitcherHeaders(props) {
    let selectedTitle = props.SelectedTitle
    function IsChanged(){

    }
    return (
        <div className="token-list-switcher">
            {props.SwitcherHeaders.map((title, index) => (<div className="switcher-option-container" key={index}>
                <div className="switcher-option-item">
                    <a className="switcher-option-item-button"
                       onClick={(event) => props.Function(event, title)}>{title}</a>
                </div>
            </div>))}
        </div>
    )
}

export default SwitcherHeaders