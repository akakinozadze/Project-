export async function PostMethod(user) {
  const resp = await fetch("https://reqres.in/api/users", {
    method: "POST",
    body: JSON.stringify(user),
    headers: { "Content-type": "application/json" },
  });

  const result = await resp.json();
  console.log(result, "result");

  if (result.ok) {
    return result;
  }
  throw new Error(result.message);
}
