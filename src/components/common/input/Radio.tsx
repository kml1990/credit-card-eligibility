/* eslint-disable jsx-a11y/label-has-associated-control */
import { ErrorMessage, Field, useField } from 'formik';
import React from 'react';

import './Radio.scss';

export interface RadioProps {
    name: string;
    label: string;
    options: string[];
}

const Radio: React.FC<RadioProps> = ({ name, label, options }) => {
    const [, { error }] = useField(name);

    return (
        <div role="group" className="Radio">
            <label className="Radio__label" htmlFor={name}>
                {label}
            </label>
            {options.map(option => (
                <span key={option}>
                    <label htmlFor={option}>
                        <span className="Radio__optionLabel">{option}</span>
                        <Field type="radio" className="Radio__input" name={name} value={option} />
                    </label>
                </span>
            ))}
            {error && <ErrorMessage component="span" className="Radio__error" name={name} />}
        </div>
    );
};

export default Radio;
