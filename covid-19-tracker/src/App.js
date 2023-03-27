import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Cards } from "./components/cards";
import { Footer } from "./components/footer";
import { Graph } from "./components/graph";
import { Header } from "./components/header";

function App() {
  return (
    <div className="App">
      <Header />
      <Cards />
      <Graph />
      <Footer />
    </div>
  );
}

export default App;
