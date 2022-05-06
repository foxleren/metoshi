import React from 'react'

import './GameProcessDemo.css'

function GameProcessDemo() {
    return (<div className="GameProcessDemo-container">
        <div className="GameProcessDemo-stroke1">
            <div className="GameProcessDemo-stroke2">
                <img className="GameProcessDemo-image" src="/images/GameProcess.svg" alt={""}/>
            </div>
        </div>
        <div className="GameProcessDemo-text-container">
            <div className="GameProcessDemo-title">
                Добро пожаловать в волшебный мир красных панд
            </div>
            <div className="GameProcessDemo-title sub">METOLAND</div>
            <div className="GameProcessDemo-text">
                Стройте и улучшайте здания, добывайте ресурсы, в том числе золото. Повышайте популяцию вашего поселения,
                следите за уровнем счастья ваших пандочек и конечно зарабатывайте токен МЕТО.
            </div>
        </div>
    </div>)
}

export default GameProcessDemo