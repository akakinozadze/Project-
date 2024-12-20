
export function LocalStorage3(urika) {
  if (urika) {
    let sumStorage = localStorage.getItem("Key");
    sumStorage = sumStorage ? JSON.parse(sumStorage) : [];

    sumStorage.push({
      prName: urika.title,
      prPhoto: urika.thumbnail,
      price: urika.price,
    });
    localStorage.setItem("Key", JSON.stringify(sumStorage));
  }
  return urika;
}
