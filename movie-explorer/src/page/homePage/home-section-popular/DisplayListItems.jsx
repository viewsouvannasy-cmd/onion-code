export function DisplayListItems({
  list,
  isLists,
  setIsLists,
  currentMovie,
  handleClose,
}) {
  function addToList(list) {
    const updateList = [...isLists];

    updateList.forEach((item) => {
      if (item.listId === list.listId) {
        item.listItems.push(currentMovie);
      }
    });

    setIsLists(updateList);

    handleClose();
  }

  return (
    <div
      role="button"
      key={list.listId}
      onClick={() => {
        addToList(list);
      }}
      className="list"
    >
      <div
        style={{
          backgroundImage: list.background,
        }}
      ></div>
      <div>
        <h4>{list.name}</h4>
        <p>
          {list.listItems.length} {list.listItems.length > 1 ? "items" : "item"}
        </p>
        <span>
          {list.listItems.map((item, index) => {
            return `${item.name}${index === list.listItems.length - 1 ? "" : ","} `;
          })}
        </span>
      </div>
    </div>
  );
}
