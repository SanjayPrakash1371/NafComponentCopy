/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable react/require-default-props */
import './loader.scss';
import React from 'react';

export interface LoaderProps {
    visible?: boolean;
    size?: 'small' | 'medium' | 'large' | 'full';
}
export const Loader = ({
    size,
    visible
}: LoaderProps) => (
    <div className={['naf-loader', `progresspercent--${size}`].join(' ')}>
        {/* Added 3 division to display 3 loader symbol */}
        { visible
            ? (
                <>
                    <div />
                    <div />
                    <div />
                </>
            ) : ('')}
    </div>
);
export default Loader;
