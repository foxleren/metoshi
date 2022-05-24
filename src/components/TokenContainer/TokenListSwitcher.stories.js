import React from 'react';
import TokenListSwitcher from "./TokenListSwitcher";
import {number} from "prop-types";

export default {
    title: 'TokenListSwitcher', component: TokenListSwitcher, argTypes: {
        tab: {
            type: number,
            description: 'Выбранный раздел',
            defaultValue: 0,
            options: [0, 1, 2],
            control: {
                type: 'radio'
            }
        }
    }
}

const Template = (arg) => <TokenListSwitcher {...arg}/>

export const Default = Template.bind({})
Default.args = {
    headers: ['NFT', 'My Chests', 'My NFT'],
    tab: 0,
    changeTab: () => {}
}