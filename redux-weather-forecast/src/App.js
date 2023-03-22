import logo from "./forecast.jpg";
import "./App.css";
import GetForecast from "./components/GetForecast";
import { ShowForecast } from "./components/ShowForecast";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <GetForecast />
      <ShowForecast />
    </div>
  );
}
export default App;
