import React, { useState } from "react";
import styles from "./Chat.module.css";

const Chat = () => {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  const sendMessage = () => {
    if (currentMessage.trim() !== "") {
      const messageData = {
        message: currentMessage,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        sender: "You",
      };
      setMessageList([...messageList, messageData]);
      setCurrentMessage("");
    }
  };

  return (
    <div className={styles.chatWindow}>
      <div className={styles.chatHeader}>
        <h3>Live Chat</h3>
      </div>
      <div className={styles.chatBody}>
        <div className={styles.messageContainer}>
          {messageList.map((message, index) => (
            <div key={index} className={`${styles.message} ${styles.you}`}>
              <div className={styles.messageContent}>
                <p>{message.message}</p>
              </div>
              <div className={styles.messageMeta}>
                <span className={styles.time}>{message.time}</span>
                <span className={styles.sender}>{message.sender}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.chatFooter}>
        <input
          type="text"
          value={currentMessage}
          className={styles.inputBox}
          placeholder="Type a message..."
          onChange={(e) => setCurrentMessage(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && sendMessage()}
        />
        <button className={styles.sendButton} onClick={sendMessage}>
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
