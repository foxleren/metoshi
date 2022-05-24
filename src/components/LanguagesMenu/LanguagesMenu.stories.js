import React from 'react';
import LanguagesMenu from "./LanguagesMenu";

export default {
    title: 'LanguagesMenu', component: LanguagesMenu, argTypes: {
        size: {
            type: 'string',
            description: 'Вариант размера',
            defaultValue: 'medium',
            options: ['medium', 'big'],
            control: {
                type: 'radio'
            }
        }, selectedLocale: {
            type: 'string', description: 'Выбор языка', defaultValue: 'Ru', options: ['Ru', 'En'], control: {
                type: 'radio'
            }
        }
    }
}

const Template = (arg) => <LanguagesMenu {...arg}/>

export const Default = Template.bind({})
Default.args = {
    size: "medium", selectedLocale: 'Ru', changeLanguage: () => {}
}