import React from 'react';
import "./buttonComponent.css"
import { NavLink } from 'react-router-dom';

const ButtonComponent = ({ content,bgColor ,path}) => {
    return (
        <>
            <button className={`btn ${bgColor}`} ><NavLink to={path}>{content}</NavLink></button>
        </>
    )
}

export default ButtonComponent