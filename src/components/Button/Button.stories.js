import React from 'react';
import Button from "./Button";

export default {
    title: 'Button',
    component: Button,
    argTypes: {
        size: {
            type: 'string',
            description: 'Вариант размера кнопки',
            defaultValue: 'medium',
            options: ['small', 'medium', 'big'],
            control: {
                type: 'radio'
            }
        },
        variant: {
            type: 'string',
            description: 'Вариант внешнего вида',
            defaultValue: 'pink',
            options: ['pink', 'transparent'],
            control: {
                type: 'radio'
            }
        }
    }
}

const Template = (arg) => <Button {...arg}/>

export const Default = Template.bind({})
Default.args = {
    content: "Content", variant: "pink", size: "big"
}