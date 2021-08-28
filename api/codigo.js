for (let i = 0; i < arr.length; i++) {
  arr.sort(function (a, b) {
    if (a.population > b.population) {
      return 1;
    }
    if (a.population < b.population) {
      return -1;
    }

    return 0;
  });
}
