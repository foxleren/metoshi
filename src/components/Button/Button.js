import React from 'react';

import './Button.css'

function Button(props) {
    return (<div className="button-box">
        <div className={"button " + props.size + " " + props.variant}>
            {props.content}
        </div>
    </div>)
}

export default Button