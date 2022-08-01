import React, { useState } from 'react';
import './Tweetbox.css'
import { Avatar, Button } from '@mui/material'
import '../App.css'
import db from '../fiirebase/init'

const Tweetbox = () => {
    const [tweetMessage, setTweetMessage] = useState('')
    const [tweetImage, setTweetImage] = useState('')
   
    const sendTweet = (e) => {
        e.preventDefault();
    
        db.collection("posts").add({
          displayName: "Ryan Norin",
          username: "niron_r",
          verified: true,
          text: tweetMessage,
          image: tweetImage,
          avatar:
            "https://static.wikia.nocookie.net/1e7fa32e-67a2-4360-a0e8-415d16daf44e/scale-to-width/755",
        });
    
        setTweetMessage("");
        setTweetImage("");
      };

    return (
        <div className='tweetbox'>
            <form action="">
                <div className="tweetbox__input">
                    <Avatar src="https://static.wikia.nocookie.net/1e7fa32e-67a2-4360-a0e8-415d16daf44e/scale-to-width/755"/>

                    <input 
                    onChange={(e) => setTweetMessage(e.target.value)}
                    type="text" 
                    placeholder="What's happening?"
                    value={tweetMessage}/>
                    
                </div>
                <input 
                    value={tweetImage}
                    onChange={(e) => setTweetImage(e.target.value)}
                    className="tweetbox__input--img" 
                    placeholder="Optional: Enter image URL"/>
                <Button 
                    onClick={sendTweet}
                    type="submit" 
                    className='tweetbox__tweetbtn'>Tweet</Button>
            </form>
        </div>
    );

  };
    

export default Tweetbox;
