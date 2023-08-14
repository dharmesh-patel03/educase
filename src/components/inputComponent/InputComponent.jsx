import React from 'react';
import "./inputComponent.css";

const InputComponent = ({ placeholder, label, span ,type}) => {
    return (
        <div className="input-wrapper">
            <label htmlFor="email" className='input-label'>{label} <span>{span}</span></label>
            <input type={type} className="input-tag" placeholder={placeholder} />
        </div>
    )
}

export default InputComponent