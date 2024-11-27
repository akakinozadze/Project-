async function Fetch1(showMore) {
  console.log(showMore, "sho");

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

// export async function DetalsProdatId(e) {
//   console.log(e, "meore fetch");
//   let baselink2 = "https://dummyjson.com/product";

//   // if (e > 0) {
//   //   baselink2 = `https://dummyjson.com/product/${e.dataID}`;
//   // }

//   const resp2 = await fetch(baselink2);
//   if (resp2.ok) {
//     return resp2.json();
//   }
//   throw new Error(Error.message);
// }
