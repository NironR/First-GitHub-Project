import React from 'react';
import './Chat.css'
import ChatHeader from './ui/ChatHeader';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import CardGiftcardRoundedIcon from '@mui/icons-material/CardGiftcardRounded';
import GifRoundedIcon from '@mui/icons-material/GifRounded';
import EmojiEmotionsRoundedIcon from '@mui/icons-material/EmojiEmotionsRounded';

const Chat = () => {
    return (
        <div className='chat'>
            <ChatHeader />

            <div className="chat__messages">

            </div>

            <div className="chat__input">
                <AddCircleRoundedIcon fontSize='large'/>
                <form action="">
                    <input type="text" placeholder='message #test-channel' />
                    <button className='chat__input--btn'  type='submit'>Send Message</button>
                </form>

                <div className="chat__input--icons">
                    <CardGiftcardRoundedIcon fontSize='large'/>
                    <GifRoundedIcon fontSize='large'/>
                    <EmojiEmotionsRoundedIcon fontSize='large'/>
                </div>
            </div>
        </div>
    );
}

export default Chat;
