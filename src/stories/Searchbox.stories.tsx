/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Searchbox } from '../components/Searchbox/Searchbox';

export default {
    title: 'Component/Searchbox',
    component: Searchbox,
}as ComponentMeta<typeof Searchbox>;

const Template: ComponentStory<typeof Searchbox> = (args) => <Searchbox {...args} />;
export const Default = Template.bind({});

Default.args = {
    placeholder: 'Search Messages',
    icon: 'times',
};
export const Disabled = Template.bind({});

Disabled.args = {
    placeholder: 'Search Messages',
    icon: 'times',
    disabled: true,

};
export const readOnly = Template.bind({});

readOnly.args = {
    placeholder: 'Search Messages',
    icon: 'times',
    readOnly: true
};
