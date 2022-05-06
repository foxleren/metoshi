import React from 'react'

import './TokenContainer.css'
import TableOfTokens from './TableOfTokens/TableOfTokens'

let switcherHeaders = ["NFT", "My Chests", "My NFT"]

function TokenContainer(props) {
    const [activeTab, setActiveTab] = React.useState(switcherHeaders[0])

    function handleTabChange(tab) {
        setActiveTab(tab)
    }

    return (<div className="token-list-container">
        <div className="token-list-switcher">
            {switcherHeaders.map((title, index) => (<div className="switcher-option-container" key={index}>
                <div className="switcher-option-item">
                    <a className={"switcher-option-item-button" + (activeTab === title ? " selected" : "")}
                       onClick={() => handleTabChange(title)}>{title}</a>
                </div>
            </div>))}
        </div>
        {activeTab === switcherHeaders[0] && <TableOfTokens ListOfTokens={props.NFT} tabIndex={0}/>}
        {activeTab === switcherHeaders[1] && <TableOfTokens ListOfTokens={props.UserChests} tabIndex={1}/>}
        {activeTab === switcherHeaders[2] && <TableOfTokens ListOfTokens={props.UserNFT} tabIndex={2}/>}
    </div>)
}

export default TokenContainer