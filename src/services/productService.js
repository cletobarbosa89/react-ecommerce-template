// Fetch all products
export const fetchAllProducts = async () => {
  try {
    return await fetch("https://fakestoreapi.com/products").then((res) => {
      if (res.status === 200) return res.json();
      else return [];
    });
  } catch (err) {
    console.log(err);
  }
};

// Fetch single product
export const fetchProduct = async (productId) => {
  try {
    return await fetch("https://fakestoreapi.com/products/" + productId).then(
      (res) => {
        if (res.status === 200) return res.json();
        else return [];
      }
    );
  } catch (err) {
    console.log(err);
  }
};
