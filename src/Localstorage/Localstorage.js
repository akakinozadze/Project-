export function LocalStorage3(urika, select) {
  console.log(select, "punqciis seleqti");
  if (urika) {
    let sumStorage = localStorage.getItem("Key");
    sumStorage = sumStorage ? JSON.parse(sumStorage) : [];
    sumStorage.forEach((element) => {
      if (!element.initialPrice) {
        element.initialPrice = element.price;
      }
    });
    const index = sumStorage.findIndex(
      (element) => element.prName === urika.title
    );

    if (index == -1 && select == undefined) {
      sumStorage.push({
        prName: urika.title,
        prPhoto: urika.thumbnail,
        price: urika.price,
        total: 1,
      });
    }
    if (select > 0 && index == -1) {
      sumStorage.push({
        prName: urika.title,
        prPhoto: urika.thumbnail,
        price: urika.price,
        total: select,
      });
    }

    localStorage.setItem("Key", JSON.stringify(sumStorage));
  }

  return urika;
}
