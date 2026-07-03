import { useState } from "react";

export function DisplayItem({ item, isLists, setIsLists, listId }) {
  const [isFocus, setIsFocus] = useState(false);

  function handleLinkToMovie() {
    console.log("yes");
  }

  function handleDeleteItem() {
    const newList = [...isLists];
    newList.forEach((list) => {
      if (list.listId === listId) {
        const newListItem = list.listItems.filter((i) => i.id !== item.id);
        list.listItems = newListItem;
      }
    });
    setIsLists(newList);
  }

  return (
    <div className="item-movie">
      <img className="background-image" src={item.url_backdrop} />
      <div className="background-layer-item-movie"></div>
      <div
        className="container-add-date"
        role="button"
        onClick={handleLinkToMovie}
      >
        <p>
          Add date <span>{item.add_date}</span>
        </p>
        <h2>{item.name}</h2>
      </div>
      <button
        className="btn-option-delete"
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
      >
        <img src="/image/icon/dots-white.png" />
      </button>
      <div
        className="container-popup-delete"
        style={{ display: isFocus ? "flex" : "none" }}
      >
        <button
          onClick={handleDeleteItem}
          onMouseDown={(e) => e.preventDefault()}
        >
          delete
        </button>
        <button>select delete</button>
      </div>
    </div>
  );
}
