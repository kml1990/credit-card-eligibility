import React from 'react';

export interface ErrorProps {
    title?: string;
    error?: string;
}

const Error: React.FC<ErrorProps> = ({ title, error = '' }) => {
    return (
        <div className="Error">
            <h1>{title || 'Error occurred'}</h1>
            <h5>{error}</h5>
        </div>
    );
};

export default Error;
