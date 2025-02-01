import jwt_decode from "jwt-decode";
export const parseToken = (token) => {
  return jwt_decode(token);
};

export const toggleLocalStorage = (token) => {
  if (token) {
    localStorage.setItem("accessToken", token);
  } else {
    localStorage.removeItem("accessToken");
  }
};

export const isTokenVAlid = (token) => {
  const data = parseToken(token);
  const currentDate = Date.now() / 1000;

  return data.exp > currentDate;
};
