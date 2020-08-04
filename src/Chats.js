import React from 'react';
//import './Chats.css';
import Chat from './Chat.js';
function Chats() {
    return (
        <div className="chats">
            <Chat
                name="Lionel Messi"
                message="Hello how are you"
                timestamp="40 seconds ag0"
                profile="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.bdgecEzBuZgaDHkrF3oksQHaE7%26pid%3DApi&f=1"
            />
             <Chat
                name="Cristiano Ronaldo"
                message="Hello how are you, I am ronaldo"
                timestamp="40 seconds ag0"
                profile="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.dYdT-pxChVs9tkylSAO9iQHaEH%26pid%3DApi&f=1"
            />
        </div>
    )
}

export default Chats
