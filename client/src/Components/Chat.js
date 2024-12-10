import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import './Chat.css'; // Import the CSS file for styling

const socket = io('http://localhost:5000'); // Connect to the backend

function Chat() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  // Listen for incoming messages
  useEffect(() => {
    socket.on('receive-message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.off('receive-message'); // Cleanup listener on unmount
    };
  }, []);

  // Send message to server
  const sendMessage = () => {
    if (message.trim()) {
      socket.emit('send-message', message); // Emit the message to the server
      setMessage(''); // Clear input
    }
  };

  return (
    <div className="chat-container">
      <div className="messages-container">
        {messages.map((msg, index) => (
          <div key={index} className="message">
            {msg}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default Chat;
