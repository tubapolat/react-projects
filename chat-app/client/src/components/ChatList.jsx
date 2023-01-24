import React from "react";
import styles from "./style.module.css";
import { useChat } from "../context/ChatContext";
import ChatItem from "./ChatItem";

const ChatList = () => {
  const { messages } = useChat();

  return (
    <div className={styles.chatlist}>
      {messages.map((item, key) => (
        <ChatItem key={key} item={item} />
      ))}
    </div>
  );
};

export default ChatList;
