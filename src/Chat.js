import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import './Chat.css'
import {Link} from 'react-router-dom';

function Chat({name,message,timestamp,profile}) {
    return(
        <Link to={`/chat/${name}`}>
        <div className="chat"> 
        <Avatar className="chat__img"alt={name} src={profile}></Avatar>
        <div className="chat_details">
            <h2>{name}</h2>
            <p>{message}</p>
            </div>
            <p className="timestamp">{timestamp}</p>
            </div>
        </Link>  
    );
}

export default Chat;
