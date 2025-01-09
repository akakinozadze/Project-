export function LocalStorage3(urika) {
  if (urika) {
    let sumStorage = localStorage.getItem("Key");
    sumStorage = sumStorage ? JSON.parse(sumStorage) : [];
    // const result = sumStorage.some((element) => element.prName === urika.title);
    const index = sumStorage.findIndex(
      (element) => element.prName === urika.title
    );

    if (index == -1) {
      sumStorage.push({
        prName: urika.title,
        prPhoto: urika.thumbnail,
        price: urika.price,
        total: 0,
      });
    }
    if (index >= 0) {
      sumStorage[index].total = sumStorage[index].total + 1;
    }

    localStorage.setItem("Key", JSON.stringify(sumStorage));
  }

  return urika;
}
