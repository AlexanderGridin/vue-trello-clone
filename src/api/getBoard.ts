export const getBoard = async (id: string) => {
  return await fetch(`https://dummyjson.com/products/${id}`)
    .then((res) => res.json())
    .then((json) => json);
};
