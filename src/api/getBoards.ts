export const getBoards = async () => {
  return await fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then((json) => json);
};
