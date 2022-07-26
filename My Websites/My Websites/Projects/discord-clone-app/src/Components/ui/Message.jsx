import { Avatar } from '@mui/material';
import React from 'react';
import './Message.css'

const Message = () => {
    return (
        <div className='message'>
            <Avatar />
            <div className="message__info">
                <h4>Username
                    <span className='message__timestamp'>
                        This is a timestamp
                    </span>
                </h4>
                <p>Message here.</p>
            </div>
        </div>
    );
}

export default Message;
