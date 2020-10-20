import React, { useEffect, useState } from 'react'
import './Chat.css'
import ChatHeader from './ChatHeader'

import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import GifIcon from '@material-ui/icons/Gif';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import Message from './Message';
import { useSelector } from 'react-redux';
import { selectChannelId, selectChannelName } from './features/appSlice';
import { selectUser } from './features/userSlice';
import db from './firebase';
import firebase from 'firebase'

function Chat() {
    const user  = useSelector(selectUser);
    const channelId = useSelector(selectChannelId);
    const channelName = useSelector(selectChannelName);
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        if (channelId) {
            db.collection('channels').doc(channelId).collection('messages').
            orderBy('timestamp', 'asc').onSnapshot((snapshot) => 
                setMessages(snapshot.docs.map(doc => doc.data())
            ))
        }
    }, [channelId])

    const sendMessages = e => {
        e.preventDefault();

        db.collection('channels').doc(channelId).collection('messages').
        add({
            message: input,
            user: user,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })

        setInput("")
    }

    return (
        <div className="chat">
            <ChatHeader channelName={channelName} />

            <div className="chat__messages">
                {messages.map((message) => (
                    <Message timestamp={message.timestamp} message={message.message} user={message.user} />
                ))}
            </div>

            <div className="chat__input">
                <AddCircleOutlineIcon />
                <form action="">
                    <input type="text" value={input} disabled={!channelId} onChange={(e) => setInput(e.target.value)} placeholder={`Message on ${channelName}`} />
                    <button onClick={sendMessages} type="submit" className="chat__inputButton">Send Message</button>
                </form>

                <div className="chat__inputIcons">
                    <CardGiftcardIcon />
                    <GifIcon />
                    <EmojiEmotionsIcon />
                </div>
            </div>
        </div>
    )
}

export default Chat
