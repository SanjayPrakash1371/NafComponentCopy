/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable react/require-default-props */
import React from 'react';
import './LeftNavbar.scss';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Icon, library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/pro-solid-svg-icons';
import { menuList } from '../menuListInterFace';

library.add(fas);

// type menuList = {
//     icon?: String[],
//     menu: String[],
//     linkto: String[]
// };
// interface menuList {
//     id: string;
//     linkto: string;
//     icon: string;
//     menu: string
// }

// let menuList: Array<{ id: number, linkto: string, icon: string, menu: string }> = []
export interface leftnavbarProps {
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

export const LeftNavbar = ({
    role, icon, menus, children, ...props
}: leftnavbarProps) => (

    <div className="naf-leftnav" onMouseMove={(e) => handleChange(e)}>
        {/* <p className="sample">{`${props.title} ${props.menu?.map((m) => m.linkto)}`}</p> */}
        {/* {props.menu?.map((m) => (<p>{m.menu}</p>))} */}
        {/* {props.menu?.map((m:any) => (
            <ul>
                <li className="naf-leftnav__list--menulist">
                    <span className="naf-leftnav__list--menuicon"><FontAwesomeIcon
                    icon={['fas', m.icon]} /></span>
                    {m.menu}
                    {m.icon}
                    {m.linkto}
                </li>
            </ul>
        ))}
        {icon ? (
            <span>
                <img className="naf-leftnav__img" src={icon} alt="nafperformance" />
            </span>
        ) : (
            ''
        )} */}
        {menus && (
            menus?.map((item: any, index: any) => (
                <nav key={index}>
                    <ul className="naf-leftnav__list">
                        <li className="naf-leftnav__list--menulist">
                            <span className="naf-leftnav__list--menuicon"><FontAwesomeIcon icon={['fas', item.icon]} /></span>
                            {item.menu}
                        </li>
                    </ul>
                </nav>
            ))
        )}
        {children}
        {/* {icon ? (
            <span>
                <img className="naf-leftnav__img" src={icon} alt="nafperformance" />
            </span>
        ) : (
            ''
        )} */}

    </div>
);

export default LeftNavbar;
