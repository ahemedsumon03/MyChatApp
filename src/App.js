import './App.css';
import React from "react";
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from "./components/ChatFeed";
import LoginForm from "./components/LoginForm";

function App() {

    if(!localStorage.getItem('Username')) return <LoginForm/>;

  return (
    <div>
        <ChatEngine
            height='100vh'
            userName={localStorage.getItem('Username')}
            userSecret={localStorage.getItem('Password')}
            projectID={`${process.env.REACT_APP_PROJECT_ID}`}
            renderChatFeed={(chatAppProps)=> <ChatFeed {...chatAppProps}/>}
        />
    </div>
  );
}

export default App;
