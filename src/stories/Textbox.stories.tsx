/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { faMagnifyingGlass } from '@fortawesome/pro-solid-svg-icons';
import { Textbox } from '../components/Textbox/Textbox';

export default {
    title: 'component/Textbox',
    component: Textbox,
} as ComponentMeta<typeof Textbox>;

const templateOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { id, value } = e.target;
    console.log('partial', { [id]: value });
};

const Template: ComponentStory<typeof Textbox> = (args) => <Textbox {...args} />;

export const Default = Template.bind({});

Default.args = {
    placeholder: 'Placeholder',
    errorMessage: '',
    id: 'Textbox1',
    onChange: templateOnChange,
    maxLength: 5,
};

export const TextboxwithIcon = Template.bind({});
TextboxwithIcon.args = {
    placeholder: 'Search Messages',
    icon: faMagnifyingGlass,
};

export const EmailTextboxError = Template.bind({});
EmailTextboxError.args = {
    placeholder: 'Email',
    errorMessage: 'Email is invalid',
};

export const PhoneTextboxNormal = Template.bind({});
PhoneTextboxNormal.args = {
    placeholder: 'Phone',
    errorMessage: '',
};

export const PhoneTextboxError = Template.bind({});
PhoneTextboxError.args = {
    placeholder: 'Phone',
    errorMessage: 'Phone number is invalid',
};
export const readonly = Template.bind({});
readonly.args = {
    readOnly: true,
    placeholder: 'Phone',
};
export const disabled = Template.bind({});
disabled.args = {
    disabled: true,
    value: 'Phone',
};
