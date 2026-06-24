export function sortArray(dataMovie, pram) {
  let temp;
  for (let i = 0; i < dataMovie.length; i++) {
    for (let j = i + 1; j < dataMovie.length; j++) {
      if (dataMovie[i][pram] > dataMovie[j][pram]) {
        temp = dataMovie[i];
        dataMovie[i] = dataMovie[j];
        dataMovie[j] = temp;
      }
    }
  }

  return dataMovie;
}
