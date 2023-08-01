/* eslint-disable react/no-unused-prop-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/require-default-props */
import React, { useState } from 'react';
import { Icon } from '../Icon/Icon';
import './Accordion.scss';

export interface AccordionProps {
    title:string;
    subtitle:string;
    content?: string;
    className?:string;
    id?:string;
    children?: React.ReactNode;
}

export const Accordion: React.FC<AccordionProps> = ({
    title, subtitle, content, className, children
}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const handleClick = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className={`${'naf-accordion'} ${className || ''}`}>
            <div className={`${'naf-accordion__header'} ${className || ''}`} onClick={handleClick}>
                <h4 className={`${'naf-accordion__header--title'} ${className || ''}`}>
                    {title}
                    <span className={`${'naf-accordion__header--title__subtitle'} ${className || ''}`}>{subtitle}</span>
                </h4>
                <span className={`${'naf-accordion__header--icon'} ${className || ''}`}>
                    {isOpen ? <Icon className={`${''}`} icon={['fas', 'chevron-up']} />
                        : <Icon className={`${''}`} icon={['fas', 'chevron-down']} />}
                </span>
            </div>
            {isOpen && <div className={`${'naf-accordion__content'} ${className || ''}`}>{content}</div>}
            {children}
        </div>
    );
};

export default Accordion;
