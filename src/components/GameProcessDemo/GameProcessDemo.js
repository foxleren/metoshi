import React from 'react'

import './GameProcessDemo.css'

import {useIntl} from 'react-intl'

function GameProcessDemo() {
    let intl = useIntl()
    return (<div className="GameProcessDemo-container">
        <div className="GameProcessDemo-stroke1">
            <div className="GameProcessDemo-stroke2">
                <img className="GameProcessDemo-image" src="/images/GameProcess.svg" alt={""}/>
            </div>
        </div>
        <div className="GameProcessDemo-text-container">
            <div className="GameProcessDemo-title">
                {intl.formatMessage({id:'game_process_demo_title_part1'})}
            </div>
            <div className="GameProcessDemo-title sub">  {intl.formatMessage({id:'game_process_demo_title_part2'})}</div>
            <div className="GameProcessDemo-text">
                {intl.formatMessage({id:'game_process_demo_text'})}
            </div>
        </div>
    </div>)
}

export default GameProcessDemo