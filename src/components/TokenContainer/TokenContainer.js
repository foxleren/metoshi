import React from 'react'
import {useIntl} from 'react-intl'
import './TokenContainer.css'
import TableOfTokens from './TableOfTokens'
import TokenListSwitcher from "./TokenListSwitcher";

function TokenContainer(props) {
    const intl = useIntl()
    const [indexOfActiveTab, setIndexOfActiveTab] = React.useState(0)
    let switcherHeaders = [
        intl.formatMessage({id: 'token_container_nft'}),
        intl.formatMessage({id: 'token_container_my_chests'}),
        intl.formatMessage({id: 'token_container_my_nft'})
    ]

    function handleTabChange(index) {
        setIndexOfActiveTab(index)
    }

    return (
        <div className="token-list-container">
            <TokenListSwitcher headers={switcherHeaders} tab={indexOfActiveTab} changeTab={(index) => handleTabChange(index)}/>
            {switcherHeaders[indexOfActiveTab] === switcherHeaders[0] &&
                <TableOfTokens ListOfTokens={props.NFT} tabIndex={0}/>}
            {switcherHeaders[indexOfActiveTab] === switcherHeaders[1] &&
                <TableOfTokens ListOfTokens={props.UserChests} tabIndex={1}/>}
            {switcherHeaders[indexOfActiveTab] === switcherHeaders[2] &&
                <TableOfTokens ListOfTokens={props.UserNFT} tabIndex={2}/>}

        </div>
    )
}

export default TokenContainer