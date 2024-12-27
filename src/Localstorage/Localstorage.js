export function LocalStorage3(urika) {
  if (urika) {
    let sumStorage = localStorage.getItem("Key");
    sumStorage = sumStorage ? JSON.parse(sumStorage) : [];

    // console.log(sumStorage.prName.find(urika.title));
    const result = sumStorage.some((element) => element.prName === urika.title);
    const  index = sumStorage.findIndex((element)=> element.prName === urika.title)
    console.log(index,"index");
    
    if (!result) {
      sumStorage.push({
        prName: urika.title,
        prPhoto: urika.thumbnail,
        price: urika.price,
      });
    }

    localStorage.setItem("Key", JSON.stringify(sumStorage));
  }
  return urika;
}

// export function LocalStorage3(urika) {
//   if (urika) {
//     // ვიღებთ არსებულ მონაცემებს localStorage-დან
//     let sumStorage = localStorage.getItem("Key");
//     sumStorage = sumStorage ? JSON.parse(sumStorage) : [];

//     // ვამოწმებთ, არსებობს თუ არა ელემენტი prPhoto-ს მიხედვით
//     const itemExists = sumStorage.some(
//       (element) => element.prPhoto === urika.thumbnail
//     );
//     console.log(itemExists, "item");

//     if (!itemExists) {
//       // თუ არ არსებობს, ვამატებთ ახალ ელემენტს
//       sumStorage.push({
//         prName: urika.title,
//         prPhoto: urika.thumbnail,
//         price: urika.price,
//       });

//       // ვანახლებთ localStorage-ს
//       localStorage.setItem("Key", JSON.stringify(sumStorage));
//     }
//   }
//   return urika;
// }
