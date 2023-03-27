import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";
import "./App.css";
import { Cards } from "./components/cards";
import { Footer } from "./components/footer";
import { Graph } from "./components/graph";
import { Header } from "./components/header";
import Loading from "./components/loading";

function App() {
  const { isLoading } = useSelector((state) => state.covidTracker);

  return (
    <div className="App">
      <Header />
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Cards />
          <Graph />
        </>
      )}

      <Footer />
    </div>
  );
}

export default App;
