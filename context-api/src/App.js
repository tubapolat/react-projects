
import './App.css';
import { ThemeProvider } from './context/ThemeContext';
import Container from './componenets/conteiner';

function App() {
  return (
    <ThemeProvider>
      <Container/>
    </ThemeProvider>
  );
}

export default App;
