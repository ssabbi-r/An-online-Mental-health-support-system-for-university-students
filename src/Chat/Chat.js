import React, { useState } from 'react';
import css from './Chat.module.css';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSendMessage = () => {
    if (input.trim()) {
      const newMessage = {
        text: input,
        sender: 'user' // This can be 'user' or 'receiver'
      };
      setMessages([...messages, newMessage]);
      setInput('');
    }
  };

  return (
    <div className={css.chatContainer}>
      <header className={css.chatHeader}>
        <h1>Chat</h1>
      </header>

      <div className={css.chatBox}>
        {messages.map((message, index) => (
          <div
            key={index}
            className={
              message.sender === 'user' ? css.userMessage : css.receiverMessage
            }
          >
            {message.text}
          </div>
        ))}
      </div>

      <div className={css.messageInput}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chat;
