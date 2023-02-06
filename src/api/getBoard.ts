export const getBoard = async (id: string) => {
  try {
    const response: Response = await fetch(
      `https://dummyjson.com/products/${id}`
    );

    if (response.status !== 200) {
      throw Error();
    }

    return await response.json();
  } catch (e) {
    console.log(e);
    return null;
  }
};
