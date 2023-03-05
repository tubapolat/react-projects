import { Money } from "../../money";
import { useDispatch } from "react-redux";
import { buy, sell } from "../../../redux/itemSlice";

export const Product = ({ title, price, url, id, amount }) => {
  const dispatch = useDispatch();
  return (
    <div className="col-sm-4">
      <div className="card" style={{ width: "18rem" }}>
        <img
          className="card-img-top width: fit-content"
          src={url}
          alt="Card cap"
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            <Money money={price} />
          </p>
          <button className="btn btn-primary" onClick={() => dispatch(buy(id))}>
            Buy
          </button>
          <span style={{ width: "25%", margin: "20px" }}>{amount}</span>
          <button
            className="btn btn-secondary"
            onClick={() => dispatch(sell(id))}
          >
            Sell
          </button>
        </div>
      </div>
    </div>
  );
};
