import React from 'react'
import './TokenContainer.css'

function TokenContainer(props) {
    return (
        <div className="token-list-switcher">
            {props.headers.map((title, index) => (<div className="switcher-option-container" key={index}>
                <div className="switcher-option-item">
                    <a className={"switcher-option-item-button" + (props.headers[props.tab] === title ? " selected" : "")}
                       onClick={() => props.changeTab(index)}>{title}</a>
                </div>
            </div>))}
        </div>
    )
}

export default TokenContainer