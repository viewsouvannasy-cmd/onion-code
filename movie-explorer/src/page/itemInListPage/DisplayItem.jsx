import { useState } from "react";

export function DisplayItem({
  item,
  isLists,
  setIsLists,
  listId,
  setIsOpenDelete,
  setIsAnimation,
  isAnimation,
  isOpenDelete,
  setDeleteList,
  deleteList,
}) {
  const [isFocus, setIsFocus] = useState(false);
  const [isCheck, setIsCheck] = useState(false);

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

  function handleSelectDelete() {
    setIsOpenDelete(true);
    setIsAnimation("open");
    setIsFocus(false);
  }

  function handleLinkMovie() {
    console.log("link");
  }

  function handleCheckDelete() {
    if (!isCheck) {
      setDeleteList([...deleteList, item.id]);
      setIsCheck(true);
    } else {
      setDeleteList(deleteList.filter((i) => i !== item.id));
      setIsCheck(false);
    }
  }

  return (
    <div className="item-movie">
      <img
        className={
          isOpenDelete ? "background-image-not-hover" : "background-image"
        }
        src={item.url_backdrop}
      />
      <div className={`background-layer-item-movie ${isAnimation}`}></div>
      <div
        className={`container-add-date ${isAnimation}`}
        role="button"
        onClick={isOpenDelete ? handleCheckDelete : handleLinkMovie}
      >
        <p
          style={{
            color: isOpenDelete ? "rgba(255, 255, 255, 0.5)" : "white",
          }}
        >
          Add date <span>{item.add_date}</span>
        </p>
        <h2
          style={{
            color: isOpenDelete ? "rgba(255, 255, 255, 0.5)" : "white",
          }}
        >
          {item.name}
        </h2>
      </div>
      <button
        className={`btn-option-delete ${isAnimation}`}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        disabled={isOpenDelete}
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
        <button
          onClick={handleSelectDelete}
          onMouseDown={(e) => e.preventDefault()}
        >
          select delete
        </button>
      </div>

      <div
        className={`checkbox-delete ${isAnimation}`}
        style={{
          display: isOpenDelete ? "flex" : "none",
          backgroundColor: isCheck ? "#b45a82" : "rgba(255, 255, 255, 0.75)",
        }}
      >
        <img
          style={{ display: isCheck ? "flex" : "none" }}
          src="/image/icon/tick.png"
        />
      </div>
    </div>
  );
}
