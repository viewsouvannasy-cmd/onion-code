export function clearData(data) {
  const id = [];
  const newData = [];

  data.forEach((person) => {
    if (!id.includes(person.id)) {
      id.push(person.id);
      newData.push(person);
    }
  });

  return newData;
}
