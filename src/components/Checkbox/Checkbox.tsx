/* eslint-disable react/no-unused-prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/require-default-props */
import React from 'react';

type CheckboxProps = {
    checked?: boolean;
    defaultChecked?: boolean;
    defaultValue?: string;
    disabled?: boolean;
    name?: string;
    required?: boolean;
    value?: string;
    options?: string[];
    onChange?: (e: any) => any;
    type?: string;
    id?: string;
    className?: string;
};

const Checkbox: React.FC<CheckboxProps> = ({
    checked,
    defaultChecked,
    defaultValue,
    disabled,
    name,
    required,
    onChange,
    options,
    id,
    className,
}) => (
    <div>
        {options?.map((option) => (
            <label key={option}>
                <input
                    type="checkbox"
                    checked={checked}
                    defaultChecked={defaultChecked}
                    defaultValue={defaultValue}
                    disabled={disabled}
                    onChange={onChange}
                    name={name}
                    required={required}
                    value={option}
                    id={id}
                    className={className}
                />
                {option}
            </label>
        ))}
    </div>
);

export default Checkbox;
