// export async function PostMethod(user, action) {
//   const resp = await fetch(
//     `https://academyofdigitalindustriesbackend.onrender.com/api/v1/auth/${action}`,
//     {
//       method: "POST",
//       body: JSON.stringify(user),
//       headers: { "Content-type": "application/json" },
//     }
//   );

//   const result = await resp.json();
//   console.log(result, "result1");

//   if (resp.ok) {
//     return result;
//   }
//   throw new Error(result.msg);
// }
