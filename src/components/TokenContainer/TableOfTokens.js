import React from "react"
import {useIntl} from 'react-intl'
import TokenSlot from './TokenSlot'
import LockedToken from './LockedToken'

function TableOfTokens(props) {

    function Translate(token) {
        let translatedTokenInfo = {
            name: '', description: '', accelerates: '', accelerator_object: ''
        }
        if (token.chestId === 1) {
            translatedTokenInfo.name = intl.formatMessage({id: 'farmer_chest'})
            translatedTokenInfo.description = intl.formatMessage({id: 'farmer_chest_description'})
            translatedTokenInfo.accelerator_object = intl.formatMessage({id: 'farmer_chest_accelerator_object'})
        } else if (token.chestId === 2) {
            translatedTokenInfo.name = intl.formatMessage({id: 'lumberjack_chest'})
            translatedTokenInfo.description = intl.formatMessage({id: 'lumberjack_chest_description'})
            translatedTokenInfo.accelerator_object = intl.formatMessage({id: 'lumberjack_chest_accelerator_object'})
        } else if (token.chestId === 3) {
            translatedTokenInfo.name = intl.formatMessage({id: 'digger_chest'})
            translatedTokenInfo.description = intl.formatMessage({id: 'digger_chest_description'})
            translatedTokenInfo.accelerator_object = intl.formatMessage({id: 'digger_chest_accelerator_object'})
        } else if (token.chestId === 4) {
            translatedTokenInfo.name = intl.formatMessage({id: 'miner_chest'})
            translatedTokenInfo.description = intl.formatMessage({id: 'miner_chest_description'})
            translatedTokenInfo.accelerator_object = intl.formatMessage({id: 'miner_chest_accelerator_object'})
        }
        translatedTokenInfo.accelerates = intl.formatMessage({id: 'chest_accelerates'})

        return translatedTokenInfo
    }

    const intl = useIntl()
    return (<div className="tokens-list">
        {props.ListOfTokens.map(function (token, index) {
            let tokenInfo = Translate(token)
            return (<TokenSlot key={index} indexOfToken={index} tokenItem={token} name={tokenInfo.name}
                               tabIndex={props.tabIndex}
                               description={tokenInfo.description}
                               img={token.img}
                               quantity={token.quantity}
                               amount={token.amount}
                               accelerates={tokenInfo.accelerates} acceleratorObject={tokenInfo.accelerator_object}
                               tokenPrice={intl.formatNumber(token.price)}
                               chestAvailable={intl.formatMessage({id: 'chest_available'})}
                               openMessage={intl.formatMessage({id: 'chest_open'})}/>)
        })}
        {props.tabIndex !== 0 && props.ListOfTokens.length < 10 ? Array(10 - props.ListOfTokens.length).fill(0).map((item, index) => (
            <LockedToken img={"./images/locker.svg"} key={index}/>)) : null}
    </div>)
}

export default TableOfTokens