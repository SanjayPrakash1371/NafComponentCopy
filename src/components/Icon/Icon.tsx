/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/require-default-props */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/pro-solid-svg-icons';
import { far } from '@fortawesome/pro-regular-svg-icons';
import { fal } from '@fortawesome/pro-light-svg-icons';
import { fat } from '@fortawesome/pro-thin-svg-icons';

library.add(fas, far, fal, fat);

interface nafIconProps {
    icon: any;
    className?: string;
    name?: string;
    onClick?: () => void;
  }

export const Icon = (
    {
        icon,
        className,
        name,
        onClick,
    }: nafIconProps
) => (
    <>
        {icon ? (
            <FontAwesomeIcon icon={icon} className={className || ''} name={name} onClick={onClick} />
        ) : ''}
    </>
);
export default Icon;
