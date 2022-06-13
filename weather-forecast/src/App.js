import logo from "./forecast.jpg";
import "./App.css";
import ForecastContainer from "./components/ForecastContainer";
import ForecastProvider from "./context/ForecastContext";

function App() {
  return (
    <ForecastProvider>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <ForecastContainer />
      </div>
    </ForecastProvider>
  );
}
export default App;
