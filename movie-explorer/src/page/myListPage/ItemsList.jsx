import { useState } from "react";
import { useNavigate } from "react-router";

export function ItemsList({
  list,
  isLists,
  setIsLists,
  setIsOpenPopup,
  setIsAnimation,
  setIsRename,
  setCurrentListId,
}) {
  const [isFocus, setIsFocus] = useState(false);
  const navigate = useNavigate();

  function handleDeleteList(e) {
    e.stopPropagation();
    setIsLists(isLists.filter((item) => item.listId !== list.listId));
  }

  function handleCurrentList() {
    navigate(`${list.listId}`);
  }

  function handleRenameList(e) {
    e.stopPropagation();
    setIsRename(true);
    setIsOpenPopup(true);
    setIsAnimation("open");
    setIsFocus(false);
    setCurrentListId(list.listId);
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
        onClick={(e) => {
          e.stopPropagation();
        }}
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
        <button
          onClick={handleRenameList}
          onMouseDown={(e) => {
            e.preventDefault();
          }}
        >
          Rename
        </button>
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
