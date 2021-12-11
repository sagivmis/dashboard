import React from "react";
import "./TextBox.css";

const TextBox = ({ classN = "", onChange = {} }) => {
    return (
        <input
            type='text'
            className={`textbox ${classN}`}
            onChange={onChange}
        ></input>
    );
};

export default TextBox;
