import React from 'react';
import Swipebuttons from './Swipebuttons';
import './App.css';
import Header from './Header.js';
import TinderCards from './TinderCards.js';
import { BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import Chats from './Chats.js';
import ChatScreen from './ChatScreen.js';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route path="/chat/:person">
            <Header backButton="/chat" /> 
            <ChatScreen />
          </Route>  
          <Route path="/chat">
            <Header backButton="/" /> 
            <Chats />
          </Route>      
          <Route path="/">
            <Header /> 
            <TinderCards />
            <Swipebuttons />  
          </Route>   
        </Switch>
      </Router>
     
    </div>
  );
}

export default App;
