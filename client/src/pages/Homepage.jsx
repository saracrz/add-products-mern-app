import { Link } from "react-router-dom";
import { usePost } from "../hooks";
import { Form } from "../components";

export const HomePage = () => {
  const { addProduct, setNewProduct, newProduct } = usePost();

  return (
    <>
      <h2>My Products App</h2>
      <Form
        onSubmit={addProduct}
        onChange={(e) => setNewProduct(e.target.value)}
        placeholder="Product Name"
        value={newProduct}
      />
      <Link to="/products">See my products</Link>
    </>
  );
};
