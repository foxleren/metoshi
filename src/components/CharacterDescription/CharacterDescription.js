import React from "react"

import './CharacterDescription.css'

import {useIntl} from 'react-intl'

function CharacterDescription() {
    let intl = useIntl()
    return (<section className="character-description">
        <div className="character-description-container">
            <div className="character-description-text-container">
                <div>
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
                        {intl.formatMessage({id: 'character_description_sentence1'})}
                    </div>
                </div>
                <span className="character-description-text-stroke">
                        {intl.formatMessage({id: 'character_description_types'})}
                    </span>
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
                    {intl.formatMessage({id: 'character_description_sentence2'})}
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
                    {intl.formatMessage({id: 'character_description_common'})}
                    <span className="span1">{intl.formatMessage({id: 'character_description_common_num'})}</span>
                    <span className="span2">{intl.formatMessage({id: 'character_description_sign'})}</span>
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
                    {intl.formatMessage({id: 'character_description_rare'})}
                    <span className="span1">{intl.formatMessage({id: 'character_description_rare_num'})}</span>
                    <span className="span2">{intl.formatMessage({id: 'character_description_sign'})}</span>
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
                    {intl.formatMessage({id: 'character_description_epic'})}
                    <span className="span1">{intl.formatMessage({id: 'character_description_epic_num'})}</span>
                    <span className="span2">{intl.formatMessage({id: 'character_description_sign'})}</span>
                </div>
            </div>
        </div>
    </section>)
}

export default CharacterDescription