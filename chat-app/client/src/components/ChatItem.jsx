import React from "react";
import style from "./style.module.css";

const ChatItem = ({ item }) => {
  return (
    <div className={`${style.chatItem} ${item.fromMe ? style.right : ""}`}>
      {item.message}
    </div>
  );
};

export default ChatItem;
