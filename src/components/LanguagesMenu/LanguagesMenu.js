import React from 'react'
import './LanguagesMenu.css'

function LanguagesMenu(props) {
    function SetRussian() {
        props.changeLanguage("Ru")
    }

    function SetEnglish() {
        props.changeLanguage("En")
    }

    return (<div className="languages-menu">
        <div className={"languages-menu-item " + (props.selectedLocale !== 'Ru' ? "selected" : "") + " " + (props.size)}
             onClick={SetEnglish}>ENG
        </div>
        <div className={"languages-menu-item " + (props.selectedLocale !== 'En' ? "selected" : "") + " " + (props.size)}
             onClick={SetRussian}>RUS
        </div>
    </div>)
}

export default LanguagesMenu