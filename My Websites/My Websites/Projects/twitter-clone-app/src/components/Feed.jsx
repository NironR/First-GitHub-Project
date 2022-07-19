import React from 'react';
import Sidebar from "./Sidebar"
import '../App.css'
import '../components/Feed.css'
import Tweetbox from './Tweetbox';
import Post from './ui/Post';


const Feed = () => {
    return (
        <div className="feed">
            <div className='feed__header'>
                <h2>Home</h2>
            </div>
            <Tweetbox />
            <Post />
        </div>
    );
}

export default Feed;
