import React from 'react'

import './TokenContainer.css'
import TableOfTokens from './TableOfTokens/TableOfTokens'

import {useIntl} from 'react-intl'

function TokenContainer(props) {
    let intl = useIntl()
    let switcherHeaders = [
        intl.formatMessage({id: 'token_container_nft'}),
        intl.formatMessage({id: 'token_container_my_chests'}),
        intl.formatMessage({id: 'token_container_my_nft'})
    ]
    const [indexOfActiveTab, setIndexOfActiveTab] = React.useState(0)

    function handleTabChange(index) {
        setIndexOfActiveTab(index)
    }


    return (<div className="token-list-container">
        <div className="token-list-switcher">
            {switcherHeaders.map((title, index) => (<div className="switcher-option-container" key={index}>
                <div className="switcher-option-item">
                    <a className={"switcher-option-item-button" + (switcherHeaders[indexOfActiveTab] === title ? " selected" : "")}
                       onClick={() => handleTabChange(index)}>{title}</a>
                </div>
            </div>))}
        </div>

        {switcherHeaders[indexOfActiveTab] === switcherHeaders[0] && <TableOfTokens ListOfTokens={props.NFT} tabIndex={0}/>}
        {switcherHeaders[indexOfActiveTab] === switcherHeaders[1] && <TableOfTokens ListOfTokens={props.UserChests} tabIndex={1}/>}
        {switcherHeaders[indexOfActiveTab] === switcherHeaders[2] && <TableOfTokens ListOfTokens={props.UserNFT} tabIndex={2}/>}
    </div>)
}

export default TokenContainer