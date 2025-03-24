import ProductDetail from "@/modules/products/components/ProductDetail";
import { DATA } from "@/modules/products/mock/products";
import React from "react";

async function page({ params }: { params: Promise<{ id: String }> }) {
  const data = await params;
  const product = DATA[0];
  return (
    <div>
      <ProductDetail {...product} />
    </div>
  );
}

export default page;
