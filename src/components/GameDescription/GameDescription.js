import React from "react"

import './GameDescription.css'

function GameDescription() {
    return (<section className="character-description">
        <div className="character-description-container">
            <div className="character-description-text-container">
                <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M11.4286 0L14.3378 8.51933L22.8571 11.4286L14.3378 14.3378L11.4286 22.8571L8.51933 14.3378L0 11.4286L8.51933 8.51933L11.4286 0Z"
                        fill="url(#paint0_radial_1695_79)"/>
                    <defs>
                        <radialGradient id="paint0_radial_1695_79" cx="0" cy="0" r="1"
                                        gradientUnits="userSpaceOnUse"
                                        gradientTransform="translate(11.4286 11.4286) rotate(90) scale(11.4286)">
                            <stop stopColor="#FFE814"/>
                            <stop offset="1" stopColor="#FFA114"/>
                        </radialGradient>
                    </defs>
                </svg>
                <div className="character-description-text">
                    Каждый персонаж имеет три вида редкости:
                    <span>normal, rare, epic
                </span>
                </div>
            </div>
            <div className="character-description-text-container">
                <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M11.4286 0L14.3378 8.51933L22.8571 11.4286L14.3378 14.3378L11.4286 22.8571L8.51933 14.3378L0 11.4286L8.51933 8.51933L11.4286 0Z"
                        fill="url(#paint0_radial_1695_79)"/>
                    <defs>
                        <radialGradient id="paint0_radial_1695_79" cx="0" cy="0" r="1"
                                        gradientUnits="userSpaceOnUse"
                                        gradientTransform="translate(11.4286 11.4286) rotate(90) scale(11.4286)">
                            <stop stopColor="#FFE814"/>
                            <stop offset="1" stopColor="#FFA114"/>
                        </radialGradient>
                    </defs>
                </svg>
                <div className="character-description-text">
                    Используя их ты можешь увеличить добычу того или иного ресурса или строительства зданий в
                    зависимости и
                    редкости.
                </div>
            </div>
            <div className="character-description-text-container sub">
                <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M11.4286 0L14.3378 8.51933L22.8571 11.4286L14.3378 14.3378L11.4286 22.8571L8.51933 14.3378L0 11.4286L8.51933 8.51933L11.4286 0Z"
                        fill="url(#paint0_radial_1695_79)"/>
                    <defs>
                        <radialGradient id="paint0_radial_1695_79" cx="0" cy="0" r="1"
                                        gradientUnits="userSpaceOnUse"
                                        gradientTransform="translate(11.4286 11.4286) rotate(90) scale(11.4286)">
                            <stop stopColor="#FFE814"/>
                            <stop offset="1" stopColor="#FFA114"/>
                        </radialGradient>
                    </defs>
                </svg>
                <div className="character-description-type">
                    Normal:
                    <span className="span1"> +200</span>
                    <span className="span2">%</span>
                </div>
            </div>
            <div className="character-description-text-container sub">
                <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M11.4286 0L14.3378 8.51933L22.8571 11.4286L14.3378 14.3378L11.4286 22.8571L8.51933 14.3378L0 11.4286L8.51933 8.51933L11.4286 0Z"
                        fill="url(#paint0_radial_1695_79)"/>
                    <defs>
                        <radialGradient id="paint0_radial_1695_79" cx="0" cy="0" r="1"
                                        gradientUnits="userSpaceOnUse"
                                        gradientTransform="translate(11.4286 11.4286) rotate(90) scale(11.4286)">
                            <stop stopColor="#FFE814"/>
                            <stop offset="1" stopColor="#FFA114"/>
                        </radialGradient>
                    </defs>
                </svg>
                <div className="character-description-type">
                    Rare:
                    <span className="span1"> +400</span>
                    <span className="span2">%</span>
                </div>
            </div>
            <div className="character-description-text-container sub">
                <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M11.4286 0L14.3378 8.51933L22.8571 11.4286L14.3378 14.3378L11.4286 22.8571L8.51933 14.3378L0 11.4286L8.51933 8.51933L11.4286 0Z"
                        fill="url(#paint0_radial_1695_79)"/>
                    <defs>
                        <radialGradient id="paint0_radial_1695_79" cx="0" cy="0" r="1"
                                        gradientUnits="userSpaceOnUse"
                                        gradientTransform="translate(11.4286 11.4286) rotate(90) scale(11.4286)">
                            <stop stopColor="#FFE814"/>
                            <stop offset="1" stopColor="#FFA114"/>
                        </radialGradient>
                    </defs>
                </svg>
                <div className="character-description-type">
                    Epic:
                    <span className="span1"> +800</span>
                    <span className="span2">%</span>
                </div>
            </div>
        </div>
    </section>)
}

export default GameDescription