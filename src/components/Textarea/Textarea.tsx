/* eslint-disable no-nested-ternary */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable no-unused-vars */
/* eslint-disable react/require-default-props */
import React, { useState } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fal } from '@fortawesome/pro-light-svg-icons';
import './Textarea.scss';

library.add(fal);

interface TextFieldProps {
    className?: string;
    size?: 'small' | 'medium' | 'large';
    rows?: number;
    cols?: number;
    onChange?(e: any): any;
    placeholder?: string;
    ischarCount?: number;
    maxLength?: number;
    id?: string;
    value?: string;
    name?: string;
    errorMessage?: any;
    readOnly?: boolean;
    disabled?: boolean;
    onBlur?(e: any): any;
    required?:boolean;
}

export const Textarea = ({
    size,
    placeholder,
    className,
    rows,
    cols,
    ischarCount,
    maxLength,
    id,
    value,
    onChange,
    name,
    errorMessage,
    disabled,
    readOnly,
    required,
    onBlur
}: TextFieldProps) => {
    const showError = !!errorMessage;
    const [content, setContent] = useState('');
    const [changevalue, setValue] = useState(value || '');
    const maxvalLength = maxLength || 1000;
    const ShowBorderRed = changevalue.length >= maxvalLength;

    const handleChangeCount = (event: any) => {
        if (event.target.value.length <= maxvalLength) {
            setValue(event.target.value);
        }
    };

    const handleChange = (event: any) => {
        setValue(event.target.value);
    };
    const remainingChars = maxvalLength - changevalue.length;
    return (
        <>
            {ischarCount ? (
                <div className={`${'nafcomponent'} ${(className || '')}`}>
                    <textarea
                        className={[(remainingChars === 0 ? ['naf-textarea', `naf-textarea ${size}`, 'naf-textarea error'] : ['naf-textarea ', `naf-textarea ${size}`]),
                            (disabled ? 'naf-textarea disabled' : ''), (readOnly ? 'naf-textarea readonly' : ''), (showError ? 'naf-textarea error' : ''), ('naf-textarea'), (className || '')].join(' ')}
                        rows={rows}
                        cols={cols}
                        placeholder={placeholder}
                        value={changevalue}
                        onChange={readOnly || disabled ? undefined : onChange}
                        maxLength={maxLength}
                        id={id}
                        onInput={handleChangeCount}
                        name={name}
                        onBlur={onBlur}
                        readOnly={readOnly}
                        disabled={disabled}
                        required={required}
                        style={{ borderColor: ShowBorderRed ? 'red' : changevalue ? 'black' : '', color: changevalue ? 'black' : '' }}
                    />
                    {required && changevalue.length === 0 && (
                        <span className="naf-textarea-required-message">This answer is required</span>
                    )}
                    <span className={`${'naf-textarea__charLimit'} ${className || ''}`}>
                        Characters left:
                        {remainingChars}
                    </span>

                </div>
            ) : (
                <textarea
                    className={[(remainingChars === 0 ? ['naf-textarea', `naf-textarea ${size}`, 'naf-textarea error'] : ['naf-textarea ', `naf-textarea ${size}`]), ('naf-textarea'), (className || '')].join(' ')}
                    rows={rows}
                    cols={cols}
                    placeholder={placeholder}
                    value={`${changevalue}`}
                    onChange={readOnly || disabled ? undefined : onChange}
                    maxLength={maxLength}
                    id={id}
                    name={name}
                    onBlur={onBlur}
                    style={{ borderColor: ShowBorderRed ? 'red' : changevalue ? 'black' : '', color: changevalue ? 'black' : '' }}
                    onInput={handleChange}
                    readOnly={readOnly}
                    disabled={disabled}
                />
            )}
            {showError ? (
                <span
                    className={['naf-textarea__message--error', className || ''].join(
                        ' '
                    )}
                    style={{ display: showError ? '' : 'none', opacity: changevalue ? '0' : '' }}
                >
                    <div className="naf-textarea__alerticon" />
                    {' '}
                    {errorMessage}
                </span>
            ) : (
                ''
            )}

        </>
    );
};

export default Textarea;
