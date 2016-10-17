import React from 'react';
import './BasicCTA.css';

const BasicLink = ({link, text, size = 'md', style}) => {
    const classes = `basic-cta basic-cta-${size} ` + (style ? `basic-cta-${style}` : '')

    return (
        <a href={link} className={classes}>
            {text}
        </a>
    )
};


export default BasicLink;
