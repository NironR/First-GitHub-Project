import React, { useState, useEffect } from 'react';
import Sidebar from "./Sidebar"
import '../App.css'
import '../components/Feed.css'
import Tweetbox from './Tweetbox';
import Post from './ui/Post';



const Feed = () => {
    const [posts, setPosts] = useState([])


    return (
        <div className="feed">
            <div className='feed__header'>
                <h2>Home</h2>
            </div>
            <Tweetbox />
            <Post 
                displayName="Ryan Norin" 
                username="niron_r"
                verified={true}
                text="My kid's got a respiratory virus?"
                image="https://c.tenor.com/wtlt2yITfSkAAAAd/oh-hot-dog-moistcr1tikal.gif"
                avatar="https://static.wikia.nocookie.net/1e7fa32e-67a2-4360-a0e8-415d16daf44e/scale-to-width/755"/>
                
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    );
}

export default Feed;
