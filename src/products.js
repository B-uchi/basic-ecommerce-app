export const getProducts = async () => {
  try {
    const response = await fetch(
      "https://dummyjson.com/products?limit=25&select=title,price,thumbnail,discountPercentage,stock"
    );
    const json = await response.json();
    return json.products;
  } catch (error) {
    return null;
  }
};
