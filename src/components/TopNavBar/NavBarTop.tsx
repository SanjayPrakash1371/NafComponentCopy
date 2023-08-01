/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable react/require-default-props */
import React from 'react';
import './NavBarTop.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/pro-solid-svg-icons';
import { menuList } from '../menuListInterFace';

library.add(fas);

export interface topNavbarProps {
    title?: string;
    role?: string;
    icon?: string;
    menus?: menuList[];
    menu?: menuList[];
    children: React.ReactNode;
    check?():void
}
const handleChange = (event: any) => {
    console.log();
};

export const NavBarTop = ({
    title, role, icon, menus, children, ...props
}: topNavbarProps) => (

    <div className="naf-topnav">
        {menus && (
            menus?.map((item: any, index: any) => (
                <nav key={index}>
                    <ul className="naf-topnav__nav">
                        <li className="nav-topnav__li">
                            <span className="naf-leftnav__list--menuicon"><FontAwesomeIcon icon={['fas', item.icon]} /></span>
                            {item.menu}
                        </li>
                    </ul>
                </nav>
            ))

        )}
        {/* <div className="navigation-menu">
            <ul>
                <li>
                    <p>{title}</p>
                </li>
                <li>
                    <p>{title}</p>
                </li>
            </ul>

        </div> */}
    </div>

);

export default NavBarTop;
