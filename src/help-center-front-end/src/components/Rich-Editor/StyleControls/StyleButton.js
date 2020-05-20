import React from 'react';

const StyleButton = ({ style, onToggle, active, label }) => {
    const onMouseDown = (e) => {
        e.preventDefault();
        onToggle(style);
    }

    const className = !active 
        ? 'RichEditor-styleButton' 
        : 'RichEditor-styleButton RichEditor-activeButton'

    return (
        <span className={className} onMouseDown={onMouseDown}>
            {label}
        </span>
    );
}

export default StyleButton;