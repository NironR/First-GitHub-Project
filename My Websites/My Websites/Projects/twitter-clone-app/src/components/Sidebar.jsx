import React from 'react';
import './Sidebar.css'
import Icon from "./SidebarOption"
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOption from './SidebarOption';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            { /* TWITTER ICON */}
            <TwitterIcon />
            <SidebarOption Icon={HomeIcon} text="Home"/>
            <SidebarOption Icon={SearchIcon} text="Explore"/>
            <SidebarOption Icon={NotificationsNoneIcon} text="Notifications"/>
            <SidebarOption />

            {/* Button Tweet */}
        </div>
    );
}

export default Sidebar;
