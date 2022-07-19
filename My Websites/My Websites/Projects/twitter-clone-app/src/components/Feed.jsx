import React from 'react';
import Sidebar from "./Sidebar"
import '../App.css'
import '../components/Feed.css'
import Tweetbox from './Tweetbox';

const Feed = () => {
    return (
        <div className="feed">
            <div className='feed__header'>
                <h2>Home</h2>
            </div>
            <Tweetbox />
        </div>
    );
}

export default Feed;
