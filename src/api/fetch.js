async function Fetch1(showMore) {
  let baselink = "https://dummyjson.com/product";
  if (baselink) {
    baselink += `?limit=5`;
  }
  if (showMore >= 5) {
    baselink = `https://dummyjson.com/product?limit=${showMore}`;
  }
  const resp = await fetch(baselink);
  if (resp.ok) {
    return resp.json();
  }
  throw new Error(Error.message);
  
}
export default Fetch1;
