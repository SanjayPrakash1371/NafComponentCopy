/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Accordion, AccordionProps } from '../components/Accordion/Accordion';

export default {
    title: 'Component/Accordion',
    component: Accordion,
    argTypes: {
        title: { control: 'text' },
        content: { control: 'text' },
    },
} as Meta;

const Template: Story<AccordionProps> = (args) => <Accordion {...args} />;

export const Default = Template.bind({});
Default.args = {
    title: 'Comment:',
    subtitle: ' Optional',
    content: 'Type your text here Type your text here Type your text here Type your text here Type your text here',
};
