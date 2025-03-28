import { prisma } from "@/lib/prisma";

// export const getProducts = async () => {
//   const result = await prisma.product.findMany({ include: { images: true } });
//   console.log(result);
//   return result;
// };

export const getProductApi = async () => {
  const restult = await fetch("/api/product");
  const response = await restult.json();
  return response;
};

export const getProductById = async (id: string) => {
  const result = await prisma.product.findFirst({
    where: { id },
    include: { images: true },
  });
  if (!result) {
    return null;
  }
  return result;
};
