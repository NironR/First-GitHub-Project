import React from 'react';
import './Tweetbox.css'
import { Avatar, Button } from '@mui/material'
import '../App.css'

const Tweetbox = () => {
    return (
        <div className='tweetbox'>
            <form action="">
                <div className="tweetbox__input">
                    <Avatar />
                    <input type="text" placeholder="What's happening?"/>
                </div>
                <input className="tweetbox__input--img" placeholder="Optional: Enter image URL"/>
                <Button className='tweetbox__tweetbtn'>Tweet</Button>
            </form>
        </div>
    );
}

export default Tweetbox;
