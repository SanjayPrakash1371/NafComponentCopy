/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Buttongroup } from '../components/Buttongroup/Buttongroup';

export default {
    title: 'Component/Buttongroup',
    component: Buttongroup,
} as ComponentMeta<typeof Buttongroup>;

const Template: ComponentStory<typeof Buttongroup> = (args) => (
    <Buttongroup {...args} />
);

export const Default = Template.bind({});
Default.args = {
    buttons: ['Personal', 'Shared', 'Check', 'Check2'],
};
export const Disabled = Template.bind({});
Disabled.args = {
    buttons: ['Personal', 'Shared', 'Check', 'Check2'],
    disabled: true
};
