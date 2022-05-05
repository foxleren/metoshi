import './css/basic.css';
import './css/additionalStyle.css'
import './css/style.css'

import Header from './components/Header/Header'
import Welcome from './components/Welcome/Welcome'
import TokenContainer from './components/TokenContainer/TokenContainer'
import Faq from './components/Faq/Faq'
import Contacts from './components/Contacts/Contacts'
import Footer from './components/Footer/Footer'
import Popup from './components/Popup/Popup'

import {useState} from "react";

function App() {
    const [values, setValues] = useState({
            username: "Name",
            NFT: [
                {
                    imgLink: "http://",
                    tokenName: "token",
                    tokenDescription: "Token description",
                    tokenQuantity: 12,
                    tokenPrice: 13000,
                    tokenAmount: "-"
                }
            ],
            userChests: [
                {}
            ],
            userNFT: [
                {}
            ]
        }
    )
    return (
        <div className="App">
            <Header></Header>
            <Welcome></Welcome>
            <TokenContainer></TokenContainer>
            <Faq></Faq>
            <Contacts></Contacts>
            <Footer></Footer>
            <Popup></Popup>
        </div>
    )
}

export default App;
