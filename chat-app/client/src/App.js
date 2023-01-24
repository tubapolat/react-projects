import "./App.css";
import Container from "./components/Continer";
import { ChatProvider } from "./context/ChatContext";

function App() {
  return (
    <ChatProvider>
      <Container />
    </ChatProvider>
  );
}

export default App;
