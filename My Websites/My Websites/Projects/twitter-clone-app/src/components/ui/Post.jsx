import { Avatar } from '@mui/material';
import React from 'react';
import './Post.css'
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';

const Post = ( {
    displayName,
    username,
    verified,
    timestamp,
}) => { 
    return (
        <div className='post'>
            <div className="post__avatar">
                <Avatar />
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__header--text">
                        <h3>
                            Ryan Norin {" "}
                            <span className='post__header--special'>
                                <VerifiedIcon className='post__badge'/>
                                @niron_r
                            </span>
                        </h3>
                    </div>
                    <div className="post__header--description">
                        <p className='post__para'>My kid's got a respiratory virus?</p>
                    </div>
                </div>
                <img src="https://c.tenor.com/wtlt2yITfSkAAAAM/oh-hot-dog-moistcr1tikal.gif" alt="" />
                <div className="post__footer">
                    <ChatBubbleOutlineIcon fontSize='small' />
                    <RepeatIcon fontSize='small'/>
                    <FavoriteBorderIcon fontSize='small' />
                    <PublishIcon fontSize='small' />
                </div>
            </div>
        </div>
    );
}

export default Post;
