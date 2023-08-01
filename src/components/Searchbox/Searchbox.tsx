/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable no-unused-vars */
/* eslint-disable react/require-default-props */
import React, { useState } from 'react';
import './Searchbox.scss';
import { IconDefinition, faSearch } from '@fortawesome/pro-solid-svg-icons';
import { Icon } from '../Icon/Icon';

interface searchProps {
  placeholder?: string;
  className?: string;
  id?: string;
  value?: string;
  onChange?(e: any): any;
  icon?: IconDefinition;
  name?:string;
  disabled?:boolean;
  readOnly?:boolean;
  maxLength?:number;
}

export const Searchbox = ({
    placeholder, className, id, value, onChange, icon, name, disabled, readOnly, maxLength
}: searchProps) => {
    const [inputValue, setInputValue] = useState('');
    const [inputType, setinputType] = useState('');
    const handleInputChange = (event: any) => {
        setInputValue(event.target.value);
        if (inputValue.length > 0) {
            setinputType('search');
        } else {
            setinputType('text');
        }
        if (onChange) {
            onChange(event);
        }
    };

    const handleFocus = () => {
        setinputType('search');
    };

    const handleBlur = () => {
        if (inputValue.length === 0) {
            setinputType('text');
        }
    };

    const handleClearInput = () => {
        setInputValue('');
        setinputType('text');
    };

    return (
        <div className={['naf-searchbox-container', className].join(' ')}>
            <Icon icon={faSearch} className="naf-searchbox-icon" />
            <input
                type="text"
                className={['naf-searchbox', className || ''].join(' ')}
                placeholder={placeholder}
                id={id}
                onChange={onChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onInput={handleInputChange}
                value={value}
                name={name}
                disabled={disabled}
                readOnly={readOnly}
                maxLength={maxLength}
            />
            {inputType === 'search' && (
                <Icon icon={icon} className={['naf-searchbox_searchClear', className || ''].join('')} onClick={handleClearInput} />
            )}
        </div>

    );
};

export default Searchbox;
