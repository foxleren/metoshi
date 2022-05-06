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
                    img: "/images/1.png",
                    name: "Builder's chest",
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do \n' +
                        'eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    quantity: 12,
                    price: 13000,
                    amount: "-"
                },
                {
                    img: "/images/2.png",
                    name: "Farmer's chest",
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do \n' +
                        'eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    quantity: 12,
                    price: 13000,
                    amount: "-"
                },
                {
                    img: "/images/3.png",
                    name: "Lumberjack's chest",
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do \n' +
                        'eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    quantity: 12,
                    price: 13000,
                    amount: "-"
                },
                {
                    img: "/images/4.png",
                    name: "Diggers's chest",
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do \n' +
                        'eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    quantity: 12,
                    price: 13000,
                    amount: "-"
                },
                {
                    img: "/images/5.png",
                    name: "Miner's chest",
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do \n' +
                        'eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    quantity: 12,
                    price: 13000,
                    amount: "-"
                }
            ],
            userChests: [
                {
                    img: "/images/1.png",
                    name: "Help",
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do \n' +
                        'eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    quantity: 12,
                    price: 13000,
                    amount: "-"
                },
                {
                    img: "/images/2.png",
                    name: "Farmer's chest",
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do \n' +
                        'eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    quantity: 12,
                    price: 13000,
                    amount: "-"
                },
                {
                    img: "/images/3.png",
                    name: "Lumberjack's chest",
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do \n' +
                        'eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    quantity: 12,
                    price: 13000,
                    amount: "-"
                },
                // {
                //     img: "/images/4.png",
                //     name: "Diggers's chest",
                //     description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do \n' +
                //         'eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                //     quantity: 12,
                //     price: 13000,
                //     amount: "-"
                // },
                // {
                //     img: "/images/5.png",
                //     name: "Miner's chest",
                //     description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do \n' +
                //         'eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                //     quantity: 12,
                //     price: 13000,
                //     amount: "-"
                // }
            ],
            userNFT: [
                {
                    img: "/images/1.png",
                    name: "USERNFT",
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do \n' +
                        'eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    quantity: 12,
                    price: 13000,
                    amount: "-"
                },
                {
                    img: "/images/2.png",
                    name: "Farmer's chest",
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do \n' +
                        'eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    quantity: 12,
                    price: 13000,
                    amount: "-"
                },
                {
                    img: "/images/3.png",
                    name: "Lumberjack's chest",
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do \n' +
                        'eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    quantity: 12,
                    price: 13000,
                    amount: "-"
                },
                {
                    img: "/images/4.png",
                    name: "Diggers's chest",
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do \n' +
                        'eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    quantity: 12,
                    price: 13000,
                    amount: "-"
                },
                // {
                //     img: "/images/5.png",
                //     name: "Miner's chest",
                //     description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do \n' +
                //         'eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                //     quantity: 12,
                //     price: 13000,
                //     amount: "-"
                // }
            ]
        }
    )
    return (
        <div className="App">
            <Header></Header>
            <Welcome></Welcome>
            <TokenContainer NFT={values.NFT} UserChests={values.userChests} UserNFT={values.userNFT}></TokenContainer>
            <Faq></Faq>
            <Contacts></Contacts>
            <Footer></Footer>
            <Popup></Popup>
        </div>
    )
}

export default App;
