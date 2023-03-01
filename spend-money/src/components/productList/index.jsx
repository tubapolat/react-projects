import { useSelector } from "react-redux";
import { Product } from "./product";

export const ProductList = () => {
  const products = useSelector((state) => state.products.items);

  return (
    <div className="container">
      <div className="row">
        {products.map((product) => (
          <Product {...product} key={product.id} />
        ))}
      </div>
    </div>
  );
};
