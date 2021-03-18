import React, { ButtonHTMLAttributes } from 'react';

import './Button.scss';

export type OnClicked = () => void;

type Size = 'small' | 'medium' | 'large';
type Variant = 'primary' | 'secondary';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text?: string;
    variant?: Variant;
    size?: Size;
    disabled?: boolean;
    className?: string;
    onClicked?: OnClicked;
}

const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    size = 'medium',
    type,
    disabled = false,
    className = '',
    onClicked,
    children,
}) => {
    const buttonClass = `Button Button--${variant} Button--${size} ${className}`;
    return (
        <button className={buttonClass} type={type} onClick={onClicked} disabled={disabled}>
            {children}
        </button>
    );
};

export default Button;
