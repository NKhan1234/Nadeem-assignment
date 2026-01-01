import { Link } from "react-router-dom";
import products from "../products";
export default function Product() {
  return (
    <div className="">
      {products.map((product) => (
        <div className="" key={product.id}>
          <Link to={`/product/${product.id}`}>{product.name}</Link>
        </div>
      ))}
    </div>
  );
}
