import React from 'react';
import './TokenContainer.css'
import TokenSlot from "./TokenSlot";

export default {
    title: 'TokenSlot', component: TokenSlot
}

const Template = (arg) => <TokenSlot {...arg}/>

export const NFT = Template.bind({})
NFT.args = {
    tabIndex: 0,
    name: "Сундук фермера",
    description: "При открытии сундука вы получите уникального Фермера случайной редкости. В зависимости от редкости NFT, его бонус к базовой добыче еды на ферме составит от 2000% до 8000%!",
    accelerates: "Ускоряет",
    acceleratorObject: "Добычу еды",
    tokenPrice: 13000,
    chestAvailable: "В наличии",
    openMessage: "Открыть сундук",
    img: "/images/2.png",
    quantity: 12,
    amount: "-",
}
export const MyChests = Template.bind({})
MyChests.args = {
    tabIndex: 1,
    name: "Сундук фермера",
    description: "При открытии сундука вы получите уникального Фермера случайной редкости. В зависимости от редкости NFT, его бонус к базовой добыче еды на ферме составит от 2000% до 8000%!",
    accelerates: "Ускоряет",
    acceleratorObject: "Добычу еды",
    tokenPrice: 13000,
    chestAvailable: "В наличии",
    openMessage: "Открыть сундук",
    img: "/images/2.png",
    quantity: 12,
    amount: "-",
}

export const MyNFT = Template.bind({})
MyNFT.args = {
    tabIndex: 2,
    name: "Сундук фермера",
    description: "При открытии сундука вы получите уникального Фермера случайной редкости. В зависимости от редкости NFT, его бонус к базовой добыче еды на ферме составит от 2000% до 8000%!",
    accelerates: "Ускоряет",
    acceleratorObject: "Добычу еды",
    tokenPrice: 13000,
    chestAvailable: "В наличии",
    openMessage: "Открыть сундук",
    img: "/images/2.png",
    quantity: 12,
    amount: "-",
}