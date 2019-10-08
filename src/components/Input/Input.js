import React from 'react';

export const Input = ({type, name, label}) => {
    return (
        <label> {label}
            <input type={type}
                   name={name}/>
        </label>

    );
};