/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable react/require-default-props */
import React from 'react';
import './Card.scss';

interface Cardprops {
  className?: string;
  children: React.ReactNode;
  imageUrl?: string;
  onClick?: () => void;
  size?: 'small' | 'medium' | 'large';

}

function Card({
    children, className, imageUrl, onClick, ...props
}: Cardprops) {
    return (
        <div className={['naf-card', [`naf-card__${props.size}`], className || ''].join(' ')} onClick={onClick}>
            {imageUrl && <img src={imageUrl} alt="Card Image" />}
            {children}
        </div>
    );
}

export default Card;
