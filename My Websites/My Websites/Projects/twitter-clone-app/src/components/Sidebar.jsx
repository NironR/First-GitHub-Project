import React from 'react';
import './Sidebar.css'
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOption from './SidebarOption';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ListAltIcon from '@mui/icons-material/ListAlt';
import { Button } from '@mui/material'
import '../App.css'

const Sidebar = () => {
    return (
        <div className='sidebar'>
            { /* TWITTER ICON */}
            <TwitterIcon className='sidebar__twitter-icon'/>
            <div className="icon__row">
                <div className="icon__container">
                    <HomeIcon />
                    <SidebarOption active text="Home" />
                </div>
                <div className="icon__container">
                    <SearchIcon />
                    <SidebarOption text="Explore" />
                </div>
                <div className="icon__container">
                    <NotificationsNoneIcon />
                    <SidebarOption text="Notifcations" />
                </div>
                <div className="icon__container">
                    <BookmarkBorderIcon />
                    <SidebarOption text="Bookmarks" />
                </div>
                <div className="icon__container">
                    <ListAltIcon />
                    <SidebarOption text="Lists" />
                </div>
                <div className="icon__container">
                    <PersonOutlineIcon />
                    <SidebarOption text="Profile" />
                </div>
                <div className="icon__container">
                    <MoreHorizIcon />
                    <SidebarOption text="More" />
                </div>
                <Button variant='outlined' className='twt__btn' fullWidth>Tweet</Button>
            </div>
        </div>
    );
}

export default Sidebar;
