const getData = async (uri: string) => {
  try {
    const res = await fetch(uri);
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error("opps! something went wrong, please try again. ");
  }
};
export default getData;
