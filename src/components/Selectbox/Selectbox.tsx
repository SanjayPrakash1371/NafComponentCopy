/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-useless-concat */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable no-unused-vars */
/* eslint-disable react/require-default-props */
import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Selectbox.scss';

type optionList = {
  value: any,
  label: string,
  icon?: string,
}

interface SelectboxProps {
  options: optionList[];
  defaultOption: string;
  onChange?: (e: any) => any;
  type?: 'primary' | 'secondary' | 'tertiary' | 'custom';
  className?: string;
  prefix?: string;
  id?: string;
  name?: string;
  value?: any;
}

export const Selectbox = ({
    options,
    defaultOption,
    onChange,
    type,
    className,
    prefix,
    id,
    name,
    value,
    ...props

}: SelectboxProps) => {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState<number | null>(null);
    const [isValueChanged, setIsValueChanged] = useState(false);

    // const dropdownRef = useRef<HTMLDivElement>(null);
    const changeRef = useRef<HTMLInputElement>(null);
    const outsideClickref = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (isValueChanged) {
            changeRef.current?.click();
        }

        setIsDropdownVisible(false);
        setIsValueChanged(false);
        console.log(isDropdownVisible);
    }, [isValueChanged]);

    function useOnClickOutside(ref: any, handler: any) {
        useEffect(

            () => {
                const listener = (event: any) => {
                    if (!ref.current || ref.current.contains(event.target)) {
                        return;
                    }
                    handler(event);
                };
                document.addEventListener('mousedown', listener);
                return () => {
                    document.removeEventListener('mousedown', listener);
                };
            },
            [ref, handler]
        );
    }

    function sample(s:string) {
        console.log(`${isDropdownVisible} ${s}`);
        // setI     sDropdownVisible(!isDropdownVisible);
    }

    // sample();

    // useOnClickOutside(outsideClickref, () => setIsDropdownVisible(false));

    return (
        <div className={`naf-dropdown${type ? ' naf-dropdown--' + `${type}` : ''}`}>
            <div
                className={`naf-dropdown__selection${type ? ' naf-dropdown__selection--' + `${type}` : ''}${isDropdownVisible ? ' visible' : ''}`}
                onClick={(e) => {
                    setIsDropdownVisible(!isDropdownVisible);
                    sample('In Open');
                    // console.log(isDropdownVisible);
                }}
            >

                <input
                    type="hidden"
                    onClick={onChange}
                    id={id}
                    value={
                        selectedItem != null ? options[selectedItem].value : options[0].value
                    }
                    ref={changeRef}
                    readOnly
                    name={name}
                />

                {type === 'tertiary' ? (
                    <span className={`naf-text naf-dropdown${type ? ' naf-dropdown--' + `${type}` : ''} ${className || ''}${isDropdownVisible ? ' naf-toggle--' + `${type}` : ''}`}>
                        {selectedItem != null ? (prefix || '') + options[selectedItem].label
                            : (prefix || '') + (value ? options[options.findIndex((a) => a.value === value)].label : options[0].label)}
                    </span>
                ) : (
                    <span className={`naf-text naf-dropdown${type ? ' naf-dropdown--' + `${type}` : ''} ${className || ''}${isDropdownVisible ? ' naf-toggle--' + `${type}` : ''}`}>
                        {(prefix || `${defaultOption || ''}`)}
                    </span>
                )}

            </div>
            {isDropdownVisible && (
                <div ref={outsideClickref} className={`naf-dropdown__item-holder${type ? ' naf-dropdown__item-holder--' + `${type}` : ''}`}>
                    {options && (
                        options.map((item: any, index: any) => (
                            <div
                                key={index}
                                className={`dropdown--item${type === 'tertiary' ? '--tertiary' : '--withicon'}`}
                                onClick={() => {
                                    setSelectedItem(index);
                                    setIsDropdownVisible(false);
                                    sample('InClose');
                                    setIsValueChanged(true);
                                }}
                            >
                                {item.icon ? <FontAwesomeIcon icon={item.icon} className="naf-toggleicon" /> : ''}
                                {item.label}
                            </div>
                        ))
                    )}
                </div>
            )}
        </div>
    );
};
export default Selectbox;
