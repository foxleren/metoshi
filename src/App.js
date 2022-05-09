import './css/basic.css';
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
import {data} from './database'

let locale = 'Ru';

function App() {
    const [values] = useState(data)
    const [selectedLocale, setLocale] = React.useState(LOCALES.RUSSIAN)

    function handleLocaleChange(loc) {
        if (loc === "Ru" && selectedLocale !== LOCALES.RUSSIAN) {
            setLocale(LOCALES.RUSSIAN)
            locale = 'Ru'
        } else if (loc === "En" && selectedLocale !== LOCALES.ENGLISH) {
            setLocale(LOCALES.ENGLISH)
            locale = 'En'
        }
    }

    return (<IntlProvider messages={messages[selectedLocale]} locale={selectedLocale} defaultLocale={LOCALES.RUSSIAN}>
            <div className="App">
                <Header selectedLocale={locale} changeLanguage={(locale) => handleLocaleChange(locale)}/>
                <Welcome/>
                <TokenContainer NFT={values.NFT} UserChests={values.userChests} UserNFT={values.userNFT}/>
                <CharacterDescription/>
                <GameProcessDemo/>
                <GameplayDescription/>
                <Faq/>
                <Contacts/>
                <Footer selectedLocale={locale} changeLanguage={(locale) => handleLocaleChange(locale)}/>
                <Popup/>
            </div>
        </IntlProvider>)
}

export default App;
