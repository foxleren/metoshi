import React from 'react'

import './GameplayDescription.css'
import {useIntl} from "react-intl";

function GetItems(intl) {
    return [[{
        text: intl.formatMessage({id: 'gameplay_description_box1_item1'})
    }, {
        text: intl.formatMessage({id: 'gameplay_description_box1_item2'})
    }, {
        text: intl.formatMessage({id: 'gameplay_description_box1_item3'})
    }, {
        text: intl.formatMessage({id: 'gameplay_description_box1_item4'})
    }, {
        text: intl.formatMessage({id: 'gameplay_description_box1_item5'})
    }], [{
        text: intl.formatMessage({id: 'gameplay_description_box2_item1'})
    }, {
        text: intl.formatMessage({id: 'gameplay_description_box2_item2'})
    }, {
        text: intl.formatMessage({id: 'gameplay_description_box2_item3'})
    }]]
}

function GetItemComponent(array) {
    return (array.map((item, index) => (<div className="GameplayDescription-text-container" key={index}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
             xmlns="http://www.w3.org/2000/svg">
            <path
                d="M12.1434 0.570312L15.0527 9.08964L23.572 11.9989L15.0527 14.9081L12.1434 23.4275L9.23418 14.9081L0.714844 11.9989L9.23418 9.08964L12.1434 0.570312Z"
                fill="url(#paint0_radial_1695_22)"/>
            <defs>
                <radialGradient id="paint0_radial_1695_22" cx="0" cy="0" r="1"
                                gradientUnits="userSpaceOnUse"
                                gradientTransform="translate(12.1434 11.9989) rotate(90) scale(11.4286)">
                    <stop stopColor="#FFE814"/>
                    <stop offset="1" stopColor="#FFA114"/>
                </radialGradient>
            </defs>
        </svg>
        <div className="GameplayDescription-text">
            {item.text}
        </div>
    </div>)))
}

function GameplayDescription() {
    const intl = useIntl()
    let items = GetItems(intl)
    return (<div className="GameplayDescription-container">
        <span className="GameplayDescription-title-span"></span>
        <div className="title">
            Gameplay
        </div>
        <div className="GameplayDescription-part1">
            <div className="GameplayDescription-box">
                <div className="GameplayDescription-box-title">
                    {intl.formatMessage({id: 'gameplay_description_box1_title'})}
                </div>
                <div className="GameplayDescription-content">
                    {GetItemComponent(items[0])}
                </div>
            </div>
            <div className="GameplayDescription-box">
                <div className="GameplayDescription-box-title">
                    {intl.formatMessage({id: 'gameplay_description_box2_title'})}
                </div>
                <div className="GameplayDescription-content">
                    {GetItemComponent(items[1])}
                </div>
            </div>
        </div>
        <div className="GameplayDescription-part2">
            <div className="GameplayDescription-box full">
                <div className="GameplayDescription-text">
                    {intl.formatMessage({id: 'gameplay_description_box3_text1'})}
                    <span>{intl.formatMessage({id: 'gameplay_description_box3_text2'})}</span>
                    {intl.formatMessage({id: 'gameplay_description_box3_text3'})}
                </div>
            </div>
        </div>
    </div>)
}

export default GameplayDescription