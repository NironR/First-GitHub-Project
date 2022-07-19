import React from 'react';
import '../ui/SidebarOption.css'

const SidebarOption = ({ active, text, Icon }) => {
    return (
        <div className={`sidebar__option ${active && 'sidebar__option--active'}`}>
            <h2 href="">{text}</h2>
        </div>
    );
}

export default SidebarOption;
