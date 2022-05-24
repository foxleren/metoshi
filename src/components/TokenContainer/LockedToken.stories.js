import React from 'react';
import LockedToken from "./LockedToken";

export default {
    title: 'LockedToken', component: LockedToken
}

const Template = (arg) => <LockedToken {...arg}/>

export const Default = Template.bind({})
Default.args = {
    img: "/images/locker.svg"
}