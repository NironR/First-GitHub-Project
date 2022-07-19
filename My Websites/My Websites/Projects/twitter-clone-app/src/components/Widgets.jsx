import React from 'react';
import './Widgets.css'
import SearchIcon from '@mui/icons-material/Search';
import { 
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
} from "react-twitter-embed"

const Widgets = () => {
    return (
        <div>
            <div className="widgets__input">
                <SearchIcon className='widgets__searchicon'/>
                <input type="text" placeholder='Search Twitter' />
            </div>
            <div className="widgets__widget--container">
                <h2>What's happening</h2>
                <TwitterTweetEmbed tweetId={'1548740395462541313'}/>
                <TwitterTimelineEmbed 
                sourceType='profile'
                screenName='ESPNNBA'
                options={{height: 400}} />
            </div>
        </div>
    );
}

export default Widgets;
