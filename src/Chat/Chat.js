import React, { useState } from 'react';
import css from './Chat.module.css';

const Chat = ({ teacherName }) => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      setMessages([...messages, { sender: 'student', text: message }]);
      setMessage('');
    }
  };

  return (
    <div className={css.chatcontainer}>
      <div className={css.chatheader}>
        <h2>{teacherName}</h2>
      </div>
      <div className={css.chatbody}>
        {messages.map((msg, index) => (
          <div key={index} className={`chat-message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className={css.chatfooter}>
        <textarea
          className={css.chatinput}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message here..."
        />
        <button className={css.sendbutton} onClick={handleSendMessage}>
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
