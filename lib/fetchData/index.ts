const getData = async (uri: string) => {
  try {
    const res = await fetch(uri);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("error", error);
    throw new Error("opps! something went wrong!");
  }
};
export default getData;
