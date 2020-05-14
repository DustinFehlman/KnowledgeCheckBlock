import React from 'react';
import "./styles.scss";

function Button({onClick, isDisabled, value}) {
    const activeClass = isDisabled ? "disabledButton" : "button";
    value = value || "";

    return (
        <div className="buttonContainer">
            <button className={activeClass} onClick={onClick} disabled={isDisabled}>
                {value}
            </button>
        </div>
    )
}

export default Button;
