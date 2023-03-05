import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import "./style.css";
import { ProductList } from "./components/productList";
import { Basket } from "./components/basket";
import { useSelector } from "react-redux";
import { Money } from "./components/money";

function App() {
  const totalMoney = useSelector((state) => state.products.totalMoney);
  return (
    <div className="App">
      <nav
        className="navbar navbar-light bg-light "
        style={{ justifyContent: "center", height: "200px" }}
      >
        <span className="navbar-text">
          <h1>Spend Money</h1>
        </span>
      </nav>
      <nav
        className="navbar navbar-light bg-success"
        style={{ justifyContent: "center" }}
      >
        <span className="navbar-text-center">
          <h1>
            <Money money={totalMoney} />
          </h1>
        </span>
      </nav>
      <ProductList />
      <Basket />
    </div>
  );
}

export default App;
