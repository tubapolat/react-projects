import { useState } from "react";
import { sendMessage } from "../socketApi";
import style from "./style.module.css";
import { useChat } from "../context/ChatContext";

const ChatForm = () => {
  const [message, setMessage] = useState("");
  const { setMessages } = useChat();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(message);
    setMessages((prevState) => [...prevState, { message, fromMe:true }]);
    sendMessage(message);
    setMessage("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className={style.textInput}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </form>
    </div>
  );
};
export default ChatForm;
