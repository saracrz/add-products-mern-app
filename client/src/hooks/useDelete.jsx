import { useState } from "react";

const API_BASE = "http://localhost:3001";

export const useDelete = () => {
  const [products, setProducts] = useState([]);

  const deleteProduct = async (id) => {
    const data = await fetch(API_BASE + "/product/delete/" + id, {
      method: "DELETE",
    });
    const deleted = await data.json();

    setProducts(products.filter((product) => product._id !== deleted._id));
  };

  return { deleteProduct };
};
