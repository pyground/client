import React from 'react';
import './BasicCTA.css';

const BasicButton = ({onClick, text, size = 'md', style}) => {
    const classes = `basic-cta basic-cta-${size} ` + (style ? `basic-cta-${style}` : '')

    return (
        <button onClick={onClick} className={classes}>
            {text}
        </button>
    )
};


export default BasicButton;
