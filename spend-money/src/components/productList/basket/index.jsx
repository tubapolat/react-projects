import { useSelector } from "react-redux";
import { Money } from "../../money";

export const Basket = () => {
  const basketItems = useSelector((state) => {
    return state.basket.items;
  });
  return (
    <div
      className="card text-center"
      style={{ width: "500px", alignItems: "center", marginLeft: "373px" }}
    >
      <div class="card-header">
        <h2>Your Reciept</h2>
      </div>
      <div class="card-body">
        <table class="table table-warning">
          <thead>
            <tr>
              <th scope="col">Product Name</th>
              <th scope="col">Price</th>
              <th scope="col">Amount</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>
            {basketItems.map((basketItem) => (
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
      <div class="card-footer text-muted">Total amount</div>
    </div>
  );
};
