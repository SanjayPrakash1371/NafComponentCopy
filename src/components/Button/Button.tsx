/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable react/require-default-props */
import React from 'react';
import './Button.scss';

export interface ButtonProps {
  value: string;
  size?: 'small' | 'medium' | 'large' | 'full' | 'verysmall';
  onClick?: () => void;
  onDoubleClick?:()=>void;
  className?: string;
    disabled?:boolean;
    id?:string;
    onChange?: (e: any) => any;
}

export const Button = ({
    value, size, className, onClick, disabled, id, onDoubleClick, ...props
}: ButtonProps) => (
    <button
        className={[
            'naf-btn',
            [`naf-btn__${size}`],
            className || '',
            disabled ? 'disabled' : '',
        ].join(' ')}
        onClick={onClick}
        onDoubleClick={onDoubleClick}
        onChange={props.onChange}
        id={id}
        value={value}
    >
        {value}
    </button>
);
export default Button;
