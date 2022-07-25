import React from 'react';
import './Sidebar.css'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import SidebarChannel from './ui/SidebarChannel';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CallIcon from '@mui/icons-material/Call';
import { Avatar } from '@mui/material'
import MicIcon from '@mui/icons-material/Mic';
import HeadsetIcon from '@mui/icons-material/Headset';
import SettingsIcon from '@mui/icons-material/Settings';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="sidebar__top">
                <h3>Niron's Discord Server</h3>
                <ExpandMoreIcon />
            </div>

            <div className="sidebar__channels">
                <div className="sidebar__channels--header">
                    <div className="sidebar__header">
                        <ExpandMoreIcon />
                        <h4>Text Channels</h4>
                    </div>
                    <AddIcon className='sidebar__add--channel' />
                </div>
                <div className="sidebar__channels--list">
                    <SidebarChannel />
                    <SidebarChannel />
                    <SidebarChannel />
                    <SidebarChannel />
                </div>
            </div>

            <div className="sidebar__voice">
                <SignalCellularAltIcon
                    className='sidebar__voice--icon'
                    fontSize='large'
                />
                <div className="sidebar__voice--info">
                    <h3>Voice Connected</h3>
                    <p>Stream</p>
                </div>
                <div className="sidebar__voice--icons">
                    <InfoOutlinedIcon />
                    <CallIcon />
                </div>
            </div>

            <div className="sidebar__profile">
                <Avatar src='https://pbs.twimg.com/profile_images/1192177140252446721/hSoEb_z7_400x400.jpg'/>
                <div className="sidebar__profile--info">
                    <h3>Ryan Norin</h3>
                    <p>#Id</p>
                </div>

                <div className="sidebar__profile--icons">
                    <MicIcon />
                    <HeadsetIcon />
                    <SettingsIcon />
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
