import React from "react"

function LockedToken(props) {
    return (<div className="empty-token-item">
        <img className="empty-token-icon" src={props.img} alt=""/>
    </div>)
}

export default LockedToken