import React from 'react';
import classes from './Button.module.css';

function Button(props) {
    return (
        <button
            type="button"
            className={`${classes["Button"]} ${props.className ? props.className : ''}`}
            aria-label={props["aria-label"]}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    )
}

export default Button

