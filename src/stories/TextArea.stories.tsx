/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Textarea } from '../components/Textarea/Textarea';

export default {
    title: 'Component/Textarea',
    component: Textarea,

} as ComponentMeta<typeof Textarea>;

const templateOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { id, value } = e.target;
    console.log('partial sanjay', { [id]: value });
};

const Template: ComponentStory<typeof Textarea> = (args) => <Textarea {...args} />;
export const Default = Template.bind({});
Default.args = {
    placeholder: 'What would you like to note down?',
    id: 'Textarea1',
    onChange: templateOnChange,
    maxLength: 500,
};
export const Withcharcount = Template.bind({});
Withcharcount.args = {
    size: 'medium',
    placeholder: 'abcd',
    rows: 5,
    cols: 40,
    ischarCount: true,
    maxLength: 500,
    value: 'abcde',
    id: 'Textarea1',
    onChange: templateOnChange,
};

export const errorMessage = Template.bind({});
errorMessage.args = {
    size: 'medium',
    placeholder: 'abcd',
    rows: 5,
    cols: 40,
    ischarCount: false,
    maxLength: 500,
    value: 'sanjay',
    id: 'Textarea1',
    errorMessage: 'Enter text',
    onChange: templateOnChange,
};

export const disabled = Template.bind({});
disabled.args = {
    size: 'medium',
    placeholder: 'abcd',
    rows: 5,
    cols: 40,
    ischarCount: true,
    maxLength: 500,
    value: 'abcde',
    id: 'Textarea1',
    disabled: true,
};

export const readOnly = Template.bind({});
readOnly.args = {
    size: 'medium',
    placeholder: 'abcd',
    rows: 5,
    cols: 40,
    ischarCount: true,
    maxLength: 500,
    value: 'abcde',
    id: 'Textarea1',
    readOnly: true,
};
