/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/require-default-props */
import React, { useState, useEffect } from 'react';
import './Progressbar.scss';

interface ProgressbarProps {
    backgroundcolor: string;
    value: number;
    percentage: string;
    className?: string;
    size?: 'small' | 'medium' | 'large' | 'full';

}
export default function Progressbar({
    className, size, value, percentage
}: ProgressbarProps) {
    const [filled, setFilled] = useState(75);
    useEffect(() => {
        if (filled < 75) {
            setTimeout(() => setFilled((prev) => prev += 2), 50);
        }
    }, [filled]);

    return (
        <div>

            <div>
                <span className={['naf-progresspercent', `naf-progresspercent--${size}`].join(' ')}>{value}</span>
                {percentage}
                <div className="naf-progressbar">
                    <div className={['naf-progressbar', `naf-progressbar--${size}`].join('')} />
                </div>

            </div>

        </div>

    );
}
