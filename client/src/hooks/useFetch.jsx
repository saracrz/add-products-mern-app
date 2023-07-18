import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(url);
        const response = await data.json();
        setProducts(response);
        setIsLoading(false);

      } catch (error) {
        console.log(error);
      }
    };
    fetchData()
  }, [isLoading, products]);

  return { products, setIsLoading, isLoading, setProducts };
};
