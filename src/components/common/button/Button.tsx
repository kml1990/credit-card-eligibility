import React from 'react';

import './Button.scss';

export type OnClicked = () => void;

type Size = 'small' | 'medium' | 'large';
type Variant = 'primary' | 'secondary';

export interface ButtonProps {
    text?: string;
    variant?: Variant;
    size?: Size;
    disabled?: boolean;
    className?: string;
    onClicked: OnClicked;
}

const Button: React.FC<ButtonProps> = ({
    text = '',
    variant = 'primary',
    size = 'medium',
    disabled = false,
    className = '',
    onClicked,
}) => {
    const buttonClass = `Button Button--${variant} Button--${size} ${className}`;
    return (
        <button className={buttonClass} type="button" onClick={onClicked} disabled={disabled}>
            {text}
        </button>
    );
};

export default Button;
