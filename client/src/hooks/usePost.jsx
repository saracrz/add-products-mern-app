import { useState } from "react";

const API_BASE = "http://localhost:3001";

export const usePost = () => {
  const [newProduct, setNewProduct] = useState("");

  const addProduct = async (e) => {
    e.preventDefault();
    await fetch(API_BASE + "/product/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: newProduct,
      }),
    }).then((res) => res.json());

    setNewProduct("");
  };

  return { addProduct, setNewProduct, newProduct };
};
