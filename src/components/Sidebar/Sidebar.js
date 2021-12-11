import React, { useCallback, useEffect, useState, useRef } from "react";
import SidebarButton from "../SidebarButton/SidebarButton";
import "./Sidebar.css";

const initTags = [
    {
        id: 1,
        content: "Home",
        active: true,
    },
    {
        id: 2,
        content: "About",
        active: false,
    },
    {
        id: 3,
        content: "Buy $GIVI",
        active: false,
    },
];

const Sidebar = () => {
    const [tags, setTags] = useState(initTags);
    const handleClick = (e) =>
        setTags((prev) =>
            prev.map(({ id, ...rest }) => ({
                ...rest,
                id,
                active: id === parseInt(e.target.id),
            }))
        );
    return (
        <div className='sidebar-container'>
            <aside className='sidebar'>
                {tags.map((tag) => (
                    <SidebarButton
                        content={tag.content}
                        isActive={tag.active}
                        key={tag.id}
                        id={tag.id}
                        onClick={handleClick}
                        // className={"hello"}
                    />
                ))}
            </aside>
        </div>
    );
};

export default Sidebar;
