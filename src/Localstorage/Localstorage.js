export function LocalStorage3(urika, select, sum) {
  if (urika) {
    let sumStorage = localStorage.getItem("Key");
    sumStorage = sumStorage ? JSON.parse(sumStorage) : [];

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
      sumStorage.forEach((element) => {
        if (!element.initialPrice) {
          element.initialPrice = element.price;
        }
      });
    }
    if (select > 0 && index == -1) {
      sumStorage.push({
        initialPrice: urika.price,
        prName: urika.title,
        prPhoto: urika.thumbnail,
        price: sum,
        total: select,
      });
    }

    localStorage.setItem("Key", JSON.stringify(sumStorage));
  }

  return urika;
}
