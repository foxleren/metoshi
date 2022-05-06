import React from 'react'

import './TokenContainer.css'

import TableOfTokens from './TableOfTokens/TableOfTokens'
import SwitcherHeaders from './SwitcherHeaders/SwitcherHeaders'

let switcherHeaders = ["NFT", "My Chests", "My NFT"]
let selectedTitle = "NFT"

function TokenContainer(props) {
    function SelectSwitcherHeader(e, title) {
        console.log(e, title);
        e.preventDefault()
        let headers = document.querySelectorAll('.switcher-option-item-button')
        headers.forEach(element => {
            if (element !== e) {
                element.classList.remove('selected')
            }
        })
        e.target.classList.add('selected')
        if (title === switcherHeaders[0]) {
            selectedTitle = switcherHeaders[0]
        } else if (title === switcherHeaders[1]) {
            //listOfTokens = props.UserChests
            selectedTitle = switcherHeaders[1]
        } else {
            //listOfTokens = props.UserNFT
            selectedTitle = switcherHeaders[2]
        }
        console.log(selectedTitle)
        //console.log()
    }

    if (selectedTitle === switcherHeaders[0]) {
        return (<div className="token-list-container">
            <div className="token-list-switcher">
                {switcherHeaders.map((title, index) => (<div className="switcher-option-container" key={index}>
                    <div className="switcher-option-item">
                        <a className="switcher-option-item-button"
                           onClick={(event) => SelectSwitcherHeader(event, title)}>{title}</a>
                    </div>
                </div>))}
            </div>
            <TableOfTokens ListOfTokens={props.NFT} Title={selectedTitle}></TableOfTokens>
        </div>)
    } else if (selectedTitle === switcherHeaders[1]) {
        // return (<div className="token-list-container">
        //     <SwitcherHeaders SwitcherHeaders={switcherHeaders} SelectedTitle={selectedTitle}
        //                      Function={(e, title) => SelectSwitcherHeader(e, title)}></SwitcherHeaders>
        //     <TableOfTokens ListOfTokens={props.UserChests} Title={selectedTitle}></TableOfTokens>
        // </div>)
    } else {
        return (<div className="token-list-container">
            <div className="token-list-switcher">
                {switcherHeaders.map((title, index) => (<div className="switcher-option-container" key={index}>
                    <div className="switcher-option-item">
                        <a className="switcher-option-item-button"
                           onClick={(event) => SelectSwitcherHeader(event, title)}>{title}</a>
                    </div>
                </div>))}
            </div>
            <TableOfTokens ListOfTokens={props.UserNFT} Title={selectedTitle}></TableOfTokens>
        </div>)
    }
}

export default TokenContainer