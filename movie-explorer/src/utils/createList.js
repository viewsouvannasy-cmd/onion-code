export function createList(isLists, setIsLists, inputNameList) {
  const random = Math.floor(Math.random() * 2) + 1;
  let color;

  if (random === 1) {
    color =
      "linear-gradient(220deg,#ffffff -10%,#a0d755 50%,#76ad2b 80%,#4b8200 100%)";
  } else {
    color = "linear-gradient(210deg,#ffffff -40%,#b45a82 60%,#72143e 100% )";
  }

  setIsLists([
    ...isLists,
    {
      listId: crypto.randomUUID(),
      name: inputNameList,
      background: color,
      listItems: [],
    },
  ]);
}
