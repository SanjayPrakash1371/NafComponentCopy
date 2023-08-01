/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Selectbox } from '../components/Selectbox/Selectbox';

export default {
    title: 'Component/Selectbox',
    component: Selectbox,
} as ComponentMeta<typeof Selectbox>;

const Template: ComponentStory<typeof Selectbox> = (args) => <Selectbox {...args} />;

const templateOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { id, value } = e.target;
    console.log(e.target);
    console.log('partial', { [id]: value });
};

const optionList = [
    { value: 'ar', label: 'arabic' },
    { value: 'en', label: 'english' },
    { value: 'fr', label: 'french' },
];
const evaluationType = [
    { value: 'ic', label: 'Individual Contributors' },
    { value: 'pm', label: 'People Manager' },
];

const optionListwithIcon = [
    { value: 'ar', label: 'arabic', icon: 'times' },
    { value: 'en', label: 'english', icon: 'times' },
    { value: 'fr', label: 'french', icon: 'times' },
];

export const primary = Template.bind({});
primary.args = {
    defaultoption: 'Please Select',
    options: optionList,
    type: 'primary',
    value: '',
    id: 'selectbox',
    onChange: templateOnChange,
};

export const secondary = Template.bind({});
secondary.args = {
    defaultoption: 'Show To: Please Select',
    value: 'ar',
    options: optionList,
    type: 'secondary',
    id: 'selectbox',
    prefix: 'Show To: ',
    onChange: templateOnChange,
};
export const tertiary = Template.bind({});
tertiary.args = {
    defaultoption: 'Select',
    options: optionListwithIcon,
    type: 'tertiary',
    prefix: 'Select',
    id: 'selectbox',
    onChange: templateOnChange,
};

export const withicon = Template.bind({});
withicon.args = {
    defaultoption: 'Select',
    options: optionListwithIcon,
    type: 'secondary',
    prefix: '',
    id: 'selectbox',
    onChange: templateOnChange,
};
export const Evaluationtype = Template.bind({});
Evaluationtype.args = {
    defaultoption: 'Select',
    options: evaluationType,
    type: 'custom',
    prefix: 'Select',
    id: 'selectbox',
    value: '',
    onChange: templateOnChange,
};
