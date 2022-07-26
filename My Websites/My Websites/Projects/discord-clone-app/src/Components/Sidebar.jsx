import React, { useEffect, useState } from 'react';
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
import { useSelector } from 'react-redux';
import { selectUser} from '../features/userSlice'
import db, { auth } from '../firebase/init';

const Sidebar = () => {
    const user = useSelector(selectUser)
    const [channels, setChannels] = useState([])

    useEffect(() => {
        db.collection ("channels").onSnapshot((snapshot) =>
        setChannels(
            snapshot.docs.map((doc) => ({
                id: doc.id,
                channel: doc.data(),
            }))
        ))
    })

    const handleAddChannel = () => {
        const channelName = prompt("Enter a new channel name")

        if (channelName) {
            db.collection("channels".push({
                channelName: channelName,
            }));
        }
    };

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
                    <AddIcon onClick={handleAddChannel} className='sidebar__add--channel' />
                </div>
                <div className="sidebar__channels--list">
                    {channels.map(({id, channel }) => (
                        <SidebarChannel 
                        key={id}
                        id={id}
                        channelName={channel.channelName}/>
                    ))}
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
                <Avatar onClick={() => auth.signOut()} src={user.photo}/>
                <div className="sidebar__profile--info">
                    <h3>{user.displayName}</h3>
                    <p>#{user.uid}</p>
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
