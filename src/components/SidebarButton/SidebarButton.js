import React from "react";
import "./SidebarButton.css";

const SidebarButton = ({ content, onClick, id, isActive, ...rest }) => {
    return (
        <div
            id={id}
            className={`sidebar-link ${isActive ? "active" : ""}`}
            onClick={onClick}
            {...rest}
        >
            {content}
        </div>
    );
};

export default SidebarButton;
