/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Progressbar from '../components/Progressbar/Progressbar';

export default {
    title: 'Component/Progressbar',
    component: Progressbar,
    parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },
} as ComponentMeta<typeof Progressbar>;

//   const Template: ComponentStory<typeof Progressbar> = (args) => <Progressbar {...args} />;

const Template: ComponentStory<typeof Progressbar> = (args) => <Progressbar {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const value = Template.bind({});
value.args = {
    value: 75,
};
export const percentage = Template.bind({});
percentage.args = {
    value: 50,
    percentage: '%'
};
export const Large = Template.bind({});
Large.args = {

    // size: 'large',
    value: 10,
    percentage: '%'
};
