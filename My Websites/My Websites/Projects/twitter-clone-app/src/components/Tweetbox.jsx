import React, { useState } from 'react';
import './Tweetbox.css'
import { Avatar, Button } from '@mui/material'
import '../App.css'

const Tweetbox = () => {
    const [tweetMessage, setTweetMessage] = useState('')

    return (
        <div className='tweetbox'>
            <form action="">
                <div className="tweetbox__input">
                    <Avatar />

                    <input 
                    onChange={(e) => setTweetMessage(e.target.value)}
                    type="text" 
                    placeholder="What's happening?"
                    value={tweetMessage}/>
                    
                </div>
                <input className="tweetbox__input--img" placeholder="Optional: Enter image URL"/>
                <Button className='tweetbox__tweetbtn'>Tweet</Button>
            </form>
        </div>
    );
}

export default Tweetbox;
