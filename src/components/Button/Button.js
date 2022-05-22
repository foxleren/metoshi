import React from 'react';

import '../../css/Button.css'

function Button(props) {
    return (<div className="button-box">
        <div className={"button " + props.size + " " + props.variant}>
            {props.content}
        </div>
    </div>)
}

export default Button