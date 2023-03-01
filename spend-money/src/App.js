import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import "./style.css";
import { ProductList } from "./components/productList";

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-light bg-light ">
        <span className="navbar-text">
          <h1>Spend Money</h1>
        </span>
      </nav>
      <nav className="navbar navbar-light bg-success ">
        <span className="navbar-text-center">
          <h1>100,000,000</h1>
        </span>
      </nav>
      <ProductList />
    </div>
  );
}

export default App;
