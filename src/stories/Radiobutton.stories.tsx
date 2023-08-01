/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Radiobutton from '../components/Radiobutton/Radiobutton';

export default {
    title: 'Component/Radiobutton',
    component: Radiobutton,
    parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },
    argTypes: {
        title: { control: 'text' },
        content: { control: 'text' },
    }
} as ComponentMeta<typeof Radiobutton>;

const Template: ComponentStory<typeof Radiobutton> = (args) => <Radiobutton {...args} />;

export const Default = Template.bind({});
Default.args = {
    options: [
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
        { label: 'Option 3', value: 'option3' },
    ],
    checked: false,
    value: 'option1',
    name: 'a',
    className: ''
};
