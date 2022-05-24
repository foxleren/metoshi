import React from 'react'
import './ToggleItem.css'

let isToggled = false;

function ToggleItem(props) {

    function changeState(e) {
        isToggled = !isToggled
        e.target.classList.toggle('active')
    }

    return (<div className="item" onClick={changeState}>
        <div className="ttl">{props.title}
            <div className="item-in">{props.content}</div>
        </div>
    </div>)
}

export default ToggleItem