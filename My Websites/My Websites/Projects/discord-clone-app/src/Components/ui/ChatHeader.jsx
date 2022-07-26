import React from 'react';
import './ChatHeader.css'
import NotificationsIcon from '@mui/icons-material/Notifications';
import EditLocationRoundedIcon from '@mui/icons-material/EditLocationRounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';

const ChatHeader = () => {
    return (
        <div className='chat__header'>
            <div className="chat__header--left">
                <h3>
                    <span className="chat__header--hash">
                        #
                    </span>
                    Text Channel Name
                </h3>
            </div>

            <div className="chat__header--right">
                <NotificationsIcon />
                <EditLocationRoundedIcon />
                <PeopleAltRoundedIcon />

                <div className="chat__header--search">
                    <input type="text" placeholder='Search' />
                    <SearchRoundedIcon />
                </div>
                <SendRoundedIcon />
                <HelpRoundedIcon />
            </div>
        </div>
    );
}

export default ChatHeader;
