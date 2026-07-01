import { useState } from "react";

export function ItemsList({ list, isLists, setIsLists, setCurrentList }) {
  const [isFocus, setIsFocus] = useState(false);

  function handleDeleteList() {
    setIsLists(isLists.filter((item) => item.listId !== list.listId));
  }

  function handleCurrentList() {
    setCurrentList(list.listItems);
  }

  return (
    <div className="list-items" role="button" onClick={handleCurrentList}>
      <div
        className="box-image"
        style={{
          backgroundImage: list.background,
        }}
      ></div>
      <div className="list-detail">
        <h4>
          {list.name}{" "}
          <span>
            {list.listItems.length}{" "}
            {list.listItems.length > 1 ? "items" : "item"}
          </span>
        </h4>
        <p>
          {list.listItems.map((item, index) => {
            return `${item.name}${index === list.listItems.length - 1 ? "" : ","} `;
          })}
        </p>
      </div>
      <button
        className="edit-list-btn"
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
      >
        <img src="/image/icon/more.png" />
      </button>
      <div
        className="tooltip-edit"
        style={{
          display: isFocus ? "flex" : "none",
        }}
      >
        <button>Rename</button>
        <button
          onClick={handleDeleteList}
          onMouseDown={(e) => {
            e.preventDefault();
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
