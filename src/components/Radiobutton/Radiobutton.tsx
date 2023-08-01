/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable react/require-default-props */
import React from 'react';

type RadioOption = {
    label: string;
    value: string;
};

interface RadioProps {
    options: RadioOption[];
    value: string;
    name: string;
    required?: boolean;
    checked?: boolean;
    defaultChecked?: boolean;
    onChange?(e: any): any;
}

const Radio = ({
    options,
    value,
    name,
    required,
    checked,
    defaultChecked,
    onChange,
}:RadioProps) => {
    const handleRadioChange = (event: any) => {
        const selectedValue = event.target.value;
        if (onChange) {
            onChange(selectedValue);
        }
    };

    return (
        <div>
            {options.map((option) => (
                <label key={option.value}>
                    <input
                        type="radio"
                        value={option.value}
                        name={name}
                        required={required}
                        checked={checked}
                        // defaultChecked={defaultChecked}
                        onChange={(e) => handleRadioChange(e)}
                    />
                    {option.label}
                </label>
            ))}
        </div>
    );
};

export default Radio;
