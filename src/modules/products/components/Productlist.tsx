import React from "react";
import { DATA } from "../mock/products";
import ProductItem from "./ProductItem";

function ProductList() {
  return (
    <div className="flex flex-wrap gap-4 items-center w-full wy-10">
      {DATA.map((item) => {
        return <ProductItem key={item.name} product={item} />;
      })}
    </div>
  );
}

export default ProductList;
