import { Link } from "react-router-dom";
import { useFetch, useDelete } from "../hooks";
import { Button } from '../components'

export const ProductsPage = () => {
  const { products, isLoading } = useFetch("http://localhost:3001/products");
  const { deleteProduct } = useDelete();

  return isLoading ? (
    <>Loading Products</>
  ) : (
    <>
      <ul>
        {products?.map((product) => (
          <div className="product-item" key={product._id}>
            <li>{product.text}</li>
            <Button className="delete-button" label="X" onClick={() => deleteProduct(product._id)}/>
          </div>
        ))}
      </ul>
      {!products.length && <span>You have not added any product yet</span>}
      <Link to="/">Go to Home page</Link>
    </>
  );
};
