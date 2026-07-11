export function formatMoney(money) {
  let result = "";
  const array = String(money).split("").reverse();
  for (let i = 0; i < array.length; i++) {
    if (i % 3 === 0 && i !== 0) {
      result += `,${array[i]}`;
    } else {
      result += array[i];
    }
  }
  return result.split("").reverse().join("");
}
