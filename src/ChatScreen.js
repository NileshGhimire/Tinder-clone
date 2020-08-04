import React,{useState} from 'react';
import './ChatScreen.css';
import Avatar from '@material-ui/core/Avatar';

function ChatScreen() {
   
    const [input,setInput]=useState('')
     // eslint-disable-next-line no-unused-vars
    const[messages,setMessages]=useState([
        {
            name:'Messi',
            image:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.bdgecEzBuZgaDHkrF3oksQHaE7%26pid%3DApi&f=1',
            message:'Hello i am ronaldo',
        },
        {
            name:'Messi',
            image:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.bdgecEzBuZgaDHkrF3oksQHaE7%26pid%3DApi&f=1',
            message:'How aree you',
        }
    ]);
    const handleSend = e =>{
        e.preventDefault();
        setMessages([...messages,{message:input}])
        setInput("");
    }
return(
<div className="chatscreen">
    <p className="chatscreen_timestamp">
        You Matched with Neeta 2020/07/12
    </p>
    {messages.map((message) =>
    message.name ? (
        <div className="chatscreen_message">
        <Avatar 
        className='chatscreen_avatar'
        alt={message.name}
        src={message.image}
        />
        <p className="chatscreen_text">{message.message}</p>
        </div>
        ):(
            <div className="chatscreen_text">
            <p className="chatscreen_textUser">{message.message}</p>
            </div>
        )
    )}
<div>
    <form className="chatscreen_input">
       <input type="text"
        placeholder="Type Message"
        className="chatscreen_inputfield"
        value={input}
        onChange={(e) => setInput(e.target.value) }
       ></input>
       <button type ="submit" onClick={handleSend}className="chatscreen_inputbutton">Send</button>
    </form>

</div>
</div>
);
}
export default ChatScreen;
