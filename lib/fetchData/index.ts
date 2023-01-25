const getData = async (uri: string) => {
  try {
    const res = await fetch(uri);
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error("opps!");
  }
};
export default getData;
