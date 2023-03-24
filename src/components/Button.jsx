import React from 'react';

const Button = ({children, className, type}) => {
    return (
        <button type={type} className={`bg-indigo-700 p-3 rounded text-white ${className}`}>
            {children}
        </button>
    );
};

export default Button;
