/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '../components/Button/Button';

export default {
    title: 'Component/Button',
    component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
    title: 'Button',
};

export const Full = Template.bind({});
Full.args = {
    title: 'Full',
    primary: true,
    size: 'full',
};

export const Small = Template.bind({});

Small.args = {
    title: 'Small',
    size: 'small',
};

export const Medium = Template.bind({});

Medium.args = {
    title: 'Medium',
    size: 'medium',
};
export const Large = Template.bind({});

Large.args = {
    title: 'Large',
    size: 'large',
};
export const verySmall = Template.bind({});

verySmall.args = {
    title: 'Verysmall',
    size: 'verysmall',
};

export const disabled = Template.bind({});

disabled.args = {
    title: 'Disabled',
    size: 'medium',
    disabled: true,
};
