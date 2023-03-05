import { useSelector } from "react-redux";
import { Money } from "../money";

export const Basket = () => {
  const basketItems = useSelector((state) => {
    return state.products.items;
  });
  return (
    <div
      className="card text-center"
      style={{ width: "500px", alignItems: "center", marginLeft: "373px" }}
    >
      <div className="card-header">
        <h2>Your Reciept</h2>
      </div>
      <div className="card-body">
        <table className="table table-warning">
          <thead>
            <tr>
              <th scope="col">Product Name</th>
              <th scope="col">Price</th>
              <th scope="col">Amount</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>
            {basketItems
              .filter((basketItem) => basketItem.amount > 0)
              .map((basketItem) => (
                <tr>
                  <td>{basketItem.title}</td>
                  <td>
                    <Money money={basketItem.price} />
                  </td>
                  <td>{basketItem.amount}</td>
                  <td>
                    <Money money={basketItem.amount * basketItem.price} />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div className="card-footer text-muted">
        Total amount:{" "}
        <Money
          money={basketItems.reduce(
            (sum, item) => sum + item.amount * item.price,
            0
          )}
        />
      </div>
    </div>
  );
};
