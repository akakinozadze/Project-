// let user = {
//   name: "John",
//   age: 30,
//   isAdmin: true,
// };
// let key;
// for (key in user) {
//   // keys
//   //   console.log(key);
//   //   console.log(user[key]); // John, 30, true;
// }
// console.log(key, `key`);

// let sum = {};

// if (sum == true) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// let user = { name: "John", age: 20 };

// let permissions1 = { canView: true };
// let permissions2 = { canEdit: true };
// let userId = { userId: 124 };
// let user1 = { name: "John" };
// Object.assign(user, permissions1, permissions2, userId, user1);
// console.log(user);

// let user2 = { name: "John", age: 20 };
// let clone = Object.assign({}, user2);
// console.log(clone);

// let ob = {
//   name: "John",
//   sizes: {
//     height: 182,
//     width: 50,
//   },
// };

// let obClon = Object.assign({}, ob);

// ob.sizes.height = 120;
// ob.name = "akaki";
// (ob.surname = "nozadze"), console.log(ob, "pirveli obieqti");
// console.log(obClon);

// let test = {
//   name: "John",
//   sizes: {
//     height: 182,
//     width: 50,
//   },
// };

// let testClone = structuredClone(test);

// console.log(testClone);

// let x = [1, 2, 3];
// lety = [];
// x.push((fa) => {
//   fa = lety ? "hello" : "nasing";
// });
// console.log(x);

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};
let sum = 0;

for (const key in salaries) {
  let result = salaries[key];
  console.log(result, "resalt");

  sum = result + sum;
  console.log(sum, "sum");
}
console.log(sum, "garet");

let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};
let sum2 = 0;
function multiplyNumeric(obj) {
  for (const key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] = obj[key] * 2;
    }
  }
}
multiplyNumeric(menu);
console.log(menu);
