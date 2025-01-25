import React, { useState } from "react";
import { PostMethod } from "../api/PostMethod";
import { useLocation } from "react-router-dom";
import SignInForm from "../components/SignInForm";
const SignIn = () => {
  const { state } = useLocation();
  console.log(state, "state");

  return (
    <div>
      <h1>sign in</h1>
      {state?.succses && (
        <h2 style={{ color: "green" }}>
          Congratulations successfully register
        </h2>
      )}
      <SignInForm />
    </div>
  );
};

export default SignIn;

// let test = "akaki midle web developer";

// console.log(test.at(-1));

// let chanacvleba = "Hiasdasd";
// // chanacvleba = "h" + chanacvleba.at(2);
// // chanacvleba = chanacvleba[0] + "G";

// console.log(chanacvleba.toUpperCase());

// let str = "As sly as a fox, as strong as an ox";

// let target = "as"; // let's look for it

// let pos = 0;
// while (true) {
//   let foundPos = str.indexOf(target, pos);
//   console.log(foundPos, "Found1");

//   if (foundPos == -1) break;

//   console.log(`Found at ${foundPos}`);
//   pos = foundPos + 1;
// }
