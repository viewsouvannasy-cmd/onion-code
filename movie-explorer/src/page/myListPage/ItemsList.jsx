import { useState } from "react";

export function ItemsList({ list, isLists, setIsLists }) {
  const [isFocus, setIsFocus] = useState(false);

  function handleDeleteList() {
    setIsLists(isLists.filter((item) => item.listId !== list.listId));
  }

  return (
    <div className="list-items">
      <div className="box-image">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Question_Mark.svg/3840px-Question_Mark.svg.png" />
      </div>
      <div className="list-detail">
        <h4>
          {list.name}{" "}
          <span>
            {list.listItems.length}{" "}
            {list.listItems.length > 1 ? "items" : "item"}
          </span>
        </h4>
        <p>
          {list.listItems.map((item) => {
            return `${item.name} `;
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
