/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Checkbox from '../components/Checkbox/Checkbox';

export default {
    title: 'Component/Checkbox',
    component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const templateOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { id, value } = e.target;
    console.log('partial sanjay', { [id]: value });
};

const Template: ComponentStory<typeof Checkbox> = (args) => (
    <Checkbox {...args} />
);
const options = ['Option 1', 'Option 2', 'Option 3'];

// //const options = [
//     { name: 'Option 1', checked: true },
//     { name: 'Option 2', checked: false },
//     { name: 'Option 3', checked: false }

// ];

export const Default = Template.bind({});
Default.args = {
    options

};
export const DefaultValue = Template.bind({});
DefaultValue.args = {
    options,
    defaultValue: 'Option 1',
    defaultChecked: true,
    onChange: templateOnChange,
};
export const Disabled = Template.bind({});
Disabled.args = {
    options,
    disabled: true
};
