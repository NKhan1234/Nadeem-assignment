import { useParams } from "react-router-dom";
import products from "../products";

export default function Products() {
  const { id } = useParams();

  const product = products.find((product) => product.id === parseInt(id));
  return (
    <div className="">
      <h1>{product.name}</h1>
    </div>
  );
}
