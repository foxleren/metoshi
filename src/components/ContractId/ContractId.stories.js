import React from 'react';
import ContractId from "./ContractId";

export default {
    title: 'ContractId',
    component: ContractId,
}

const Template = (arg) => <ContractId {...arg}/>

export const Default = Template.bind({})
Default.args = {
    id: "id-0573-442-424"
}