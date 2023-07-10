// Fetch all products
export const fetchAllProducts = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  return await res.json();
};

// Fetch single product
export const fetchProduct = async (productId) => {
  const res = await fetch("https://fakestoreapi.com/products/" + productId);
  return await res.json();
};
