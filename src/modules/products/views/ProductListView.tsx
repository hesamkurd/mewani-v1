"use client";

import React, { useEffect, useState } from "react";
import ProductList from "../components/Productlist";
import { ProductsWithImages } from "@/types";
import { getProductApi } from "../services";

function ProductListView() {
  const [products, setProducts] = useState<ProductsWithImages[]>([]);

  const getProductsData = async () => {
    const result = await getProductApi();
    setProducts(result?.data);
  };

  useEffect(() => {
    getProductsData();
  }, []);

  // const prosucts = await getProducts();
  return (
    <div>
      <ProductList products={products} />
    </div>
  );
}

export default ProductListView;
