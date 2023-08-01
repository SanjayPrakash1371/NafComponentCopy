/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable react/require-default-props */
import React, { useState } from 'react';
import { IconDefinition } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fal } from '@fortawesome/pro-light-svg-icons';
import '../Textbox/Textbox.scss';
import '../Button/Button.scss';
import { TextBoxModel, Sample } from '../Models/TextboxModel';

library.add(fal);

export const TextBoxNew = (
    {
        placeholder,
        errorMessage,
        maxLength,
        value,
        className,
        onChange,
        onClick,
        readOnly,
        disabled,
        id,
        name,
        icon,
        isIconPointer,
        onIconClick
    } : Sample
) => {
    const [changevalue, setValue] = useState(value || '');
    const maxvalLength = maxLength || 200;
    const handleChangeCount = (event:any) => {
        if (event.target.value.length <= maxvalLength) {
            setValue(event.target.value);
        }
    };
    const check = () => {
        console.log('Sanjay');
    };
    const showError = !!errorMessage;
    const ShowBorderRed = maxvalLength - changevalue.length;

    return (
        <div className="naf-textbox input__wrapper">
            <input
                className={[(ShowBorderRed === 0 ? 'naf-textbox__input borderRed' : 'naf-textbox__input'), (className || ''), (showError ? 'naf-textbox__input naf-textbox__input--error' : 'naf-textbox__input'), (readOnly ? 'naf-textbox__input--readonly' : ''), (disabled ? 'naf-textbox__input--disabled' : '')].join(' ')}
                type="text"
                placeholder={placeholder}
                onChange={check}
                onInput={handleChangeCount}
                maxLength={maxLength}
                disabled={disabled}
                readOnly={readOnly}
                value={value}
                id={id}
                name={name}
            />
            {icon ? (
                <span
                    className={`naf-textbox__input--icon ${
                        isIconPointer ? 'naf-textbox__input--icon--pointer' : ''
                    }`}
                    onClick={check}
                >
                    <FontAwesomeIcon icon={icon} />
                </span>
            ) : (
                ''
            )}
            {showError ? (
                <span
                    className={['naf-textbox__message--error', className || ''].join(
                        ' '
                    )}
                    style={{ display: showError ? 'inline' : 'none' }}
                >
                    <FontAwesomeIcon icon={['fal', 'triangle-exclamation']} className="naf-textbox__alerticon" />
                    {' '}
                    {errorMessage}
                </span>
            ) : (
                ''
            )}
        </div>
    );
};

export default TextBoxNew;
