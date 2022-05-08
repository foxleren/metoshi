import './css/basic.css';
import './css/additionalStyle.css'
import './css/style.css'

import Header from './components/Header/Header'
import Welcome from './components/Welcome/Welcome'
import TokenContainer from './components/TokenContainer/TokenContainer'
import CharacterDescription from './components/CharacterDescription/CharacterDescription'
import GameProcessDemo from './components/GameProcessDemo/GameProcessDemo'
import GameplayDescription from "./components/GameplayDescription/GameplayDescription";
import Faq from './components/Faq/Faq'
import Contacts from './components/Contacts/Contacts'
import Footer from './components/Footer/Footer'
import Popup from './components/Popup/Popup'


import React, {useState} from "react";
import {IntlProvider} from 'react-intl'

import {LOCALES} from './i18n/locales'
import {messages} from './i18n/messages'

let loc = 'Ru';
let isLocaleChanged = false;

function App() {
    const [values, setValues] = useState({
        username: "Name", NFT: [
            {
                img: "./images/2.png",
                name: "Farmer's chest",
                chestId: 1,
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do \n' + 'eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                quantity: 12,
                price: 13000,
                amount: "-",
                comment: "сбор урожая"
            }, {
                img: "./images/3.png",
                name: "Lumberjack's chest",
                chestId: 2,
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do \n' + 'eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                quantity: 12,
                price: 13000,
                amount: "-",
                comment: "сбор дерева"

            }, {
                img: "./images/4.png",
                name: "Diggers's chest",
                chestId: 3,
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do \n' + 'eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                quantity: 12,
                price: 13000,
                amount: "-",
                comment: "сбор глины"

            }, {
                img: "./images/5.png",
                name: "Miner's chest",
                chestId: 4,
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do \n' + 'eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                quantity: 12,
                price: 13000,
                amount: "-",
                comment: "сбор камня"
            }], userChests: [{
            img: "./images/2.png",
            name: "Farmer's chest",
            chestId: 1,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do \n' + 'eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            quantity: 12,
            price: 13000,
            amount: "-",
            comment: "сбор урожая"
        }, {
            img: "./images/3.png",
            name: "Lumberjack's chest",
            chestId: 2,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do \n' + 'eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            quantity: 12,
            price: 13000,
            amount: "-",
            comment: "сбор дерева"

        }, {
            img: "./images/4.png",
            name: "Diggers's chest",
            chestId: 3,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do \n' + 'eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            quantity: 12,
            price: 13000,
            amount: "-",
            comment: "сбор глины"

        }, {
            img: "./images/5.png",
            name: "Miner's chest",
            chestId: 4,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do \n' + 'eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            quantity: 12,
            price: 13000,
            amount: "-",
            comment: "сбор камня"
        }], userNFT: [{
            img: "./images/2.png",
            name: "Farmer's chest",
            chestId: 1,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do \n' + 'eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            quantity: 12,
            price: 13000,
            amount: "-",
            comment: "сбор урожая"
        }, {
            img: "./images/3.png",
            name: "Lumberjack's chest",
            chestId: 2,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do \n' + 'eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            quantity: 12,
            price: 13000,
            amount: "-",
            comment: "сбор дерева"

        }, {
            img: "./images/4.png",
            name: "Diggers's chest",
            chestId: 3,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do \n' + 'eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            quantity: 12,
            price: 13000,
            amount: "-",
            comment: "сбор глины"

        }, {
            img: "./images/5.png",
            name: "Miner's chest",
            chestId: 4,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do \n' + 'eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            quantity: 12,
            price: 13000,
            amount: "-",
            comment: "сбор камня"
        }]
    })

    const [selectedLocale, setLocale] = React.useState(LOCALES.RUSSIAN)

    // changeLocaleStatus()

    function handleLocaleChange(locale) {
        if (locale === "Ru" && selectedLocale !== LOCALES.RUSSIAN) {
            setLocale(LOCALES.RUSSIAN)
            loc = 'Ru'
            isLocaleChanged = true;
        } else if (locale === "En" && selectedLocale !== LOCALES.ENGLISH) {
            setLocale(LOCALES.ENGLISH)
            loc = 'En'
            isLocaleChanged = true;
        }
    }


    return (<IntlProvider messages={messages[selectedLocale]} locale={selectedLocale} defaultLocale={LOCALES.RUSSIAN}>
            <div className="App">
                <Header selectedLocale={loc} changeLanguage={(locale) => handleLocaleChange(locale)}></Header>
                <Welcome></Welcome>
                <TokenContainer NFT={values.NFT} UserChests={values.userChests}
                                UserNFT={values.userNFT}
                ></TokenContainer>
                <CharacterDescription></CharacterDescription>
                <GameProcessDemo></GameProcessDemo>
                <GameplayDescription></GameplayDescription>
                <Faq></Faq>
                <Contacts></Contacts>
                <Footer selectedLocale={loc} changeLanguage={(locale) => handleLocaleChange(locale)}></Footer>
                <Popup></Popup>
            </div>
        </IntlProvider>

    )
}

export default App;
