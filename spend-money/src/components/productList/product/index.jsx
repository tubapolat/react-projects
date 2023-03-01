export const Product = ({ title, price, url, id }) => {
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
          <p className="card-text">£{price}</p>
          <button className="btn btn-primary">Buy</button>
          <input style={{ width: "25%", margin: "10px" }}></input>
          <button className="btn btn-secondary">Sell</button>
        </div>
      </div>
    </div>
  );
};
