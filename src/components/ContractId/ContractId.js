import React from 'react'
import './ContractId.css'

function ContractId(props) {
    return (<a className="contract-id" href="src/components/ContractId/ContractId" target="_blank">
        {props.id}
    </a>)
}

export default ContractId