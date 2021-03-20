import { ErrorMessage, useField } from 'formik';
import React, { InputHTMLAttributes } from 'react';

import './InputField.scss';

export interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, ...props }) => {
    const [field, { error }] = useField(props);

    return (
        <div className="InputField">
            <label className="InputField__label" htmlFor={field.name}>
                {label}
            </label>
            <input className="InputField__input" {...field} {...props} />
            {error && (
                <ErrorMessage component="span" className="InputField__error" name={field.name} />
            )}
        </div>
    );
};

export default InputField;
