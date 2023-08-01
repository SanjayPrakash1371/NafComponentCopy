/* eslint-disable react/button-has-type */
/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable react/require-default-props */
import React, { useState } from 'react';
import './Buttongroup.scss';

interface buttongrouprops {
  buttons: any;
  className: string;
  disabled?: boolean;
  onClick?: () => void;
}

export const Buttongroup = (
    {
        buttons,
        className,
        disabled,
        onClick,
    }: buttongrouprops
) => {
    const [clickedId, setClickedId] = useState(0);

    const handleClick = (event: any, id: any) => {
        console.log('sanjay');
        setClickedId(id);
    };
    return (
        <div className={`${'naf-btn-group '} ${className || ''}`}>
            {buttons.map((buttonLabel: any, i: any) => (
                <button
                    key={i}
                    name={buttonLabel}
                    onClick={onClick}
                    onDoubleClick={(e) => handleClick(e, i)}
                    disabled={disabled}
                    className={i === clickedId ? 'naf-btn-group__custom naf-btn-group__active' : 'naf-btn-group__custom'}
                >
                    {buttonLabel}
                </button>
            ))}
        </div>
    );
};

export default Buttongroup;
