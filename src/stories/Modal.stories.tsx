/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Modal from '../components/Modal';

export default {
    title: 'component/Modal',
    component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Confirmation = Template.bind({});
Confirmation.args = {
    isOpen: true,
    title: 'Review Confirmation',
    submit: 'Complete',
    cancel: 'Cancel',
    content: 'Once you confirm and click complete, you will no longer be able to make any edits. Are you sure you would like to complete your review?',
};

export const Incomplete = Template.bind({});
Incomplete.args = {
    isOpen: true,
    title: 'Review Incomplete',
    submit: 'Go Back',
    content: 'Please go back to make sure all questions are answered.',

};

export const Note = Template.bind({});
Note.args = {
    isOpen: true,
    title: 'Note Added',
    content: 'Your note was successfully added! Please refer back to it within “Personal” or “Shared” section.',

};

export const Remainder = Template.bind({});
Remainder.args = {
    isOpen: true,
    title: 'Manager’s Reminder!',
    subtitle: 'December 10th, 2022',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',

};
