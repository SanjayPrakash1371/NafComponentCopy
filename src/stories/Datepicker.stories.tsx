/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Datepicker } from '../components/Datepicker/Datepicker';

export default {
    title: 'Component/Datepicker',
    component: Datepicker,
    argTypes: {
    },
} as ComponentMeta<typeof Datepicker>;

const Template: ComponentStory<typeof Datepicker> = (args) => <Datepicker {...args} />;

const templateOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { id, value } = e.target;
    console.log('partial', { [id]: value });
};

export const Default = Template.bind({});
Default.args = {
    currentDate: new Date(),
    onChange: templateOnChange,
    id: 'calenderid',
    minDate: new Date(),
    maxDate: new Date('7/7/2023'),
};
