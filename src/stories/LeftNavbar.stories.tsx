/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LeftNavbar } from '../components/LeftNavbar/LeftNavbar';
import { menuList } from '../components/menuListInterFace';

export default {
    title: 'Component/Leftnavbar',
    component: LeftNavbar,
    parameters: {
        layout: 'fullscreen',
    },
} as ComponentMeta<typeof LeftNavbar>;

const Template: ComponentStory<typeof LeftNavbar> = (args) => <LeftNavbar {...args} />;

const handlecheck = (): void => {
    console.log('sanjay');
};

const list : menuList[] = [
    {
        id: '1', linkto: 'hh', icon: 'home', menu: 'Home'
    },
    {
        id: '2', linkto: 'Notes', icon: 'sticky-note', menu: 'Notes'
    },
    {
        id: '3', linkto: 'MyTeam', icon: 'user-friends', menu: 'My Team'
    },
    {
        id: '4', linkto: 'Templates', icon: 'file-text', menu: 'Templates'
    }
];

export const Default = Template.bind({});
Default.args = {
    title: 'sanjay',
    menu: list,
    menus: list,
    check: handlecheck
};

export const LeftNavwithicons = Template.bind({});
LeftNavwithicons.args = {
    menu: list,
    menus: list,
    check: handlecheck
};
