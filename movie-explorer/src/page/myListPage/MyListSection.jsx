import { useState, useEffect } from "react";
import { ItemsList } from "./ItemsList";
import { createList } from "../../utils/createList";

export function MyListSection({ isLists, setIsLists }) {
  const [inputNameList, setInputNameList] = useState("");
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const [isAnimation, setIsAnimation] = useState("");
  const [isRename, setIsRename] = useState(false);
  const [currentListId, setCurrentListId] = useState("");

  useEffect(() => {
    if (isOpenPopup) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpenPopup]);

  function handleOpen() {
    setIsOpenPopup(true);
    setIsAnimation("open");
  }

  function handleClose() {
    setIsAnimation("close");
    setInputNameList("");

    setTimeout(() => {
      setIsOpenPopup(false);
      setIsRename(false);
    }, 100);
  }

  function handleInputName(e) {
    setInputNameList(e.target.value);
  }

  function handleCreateList(e) {
    e.preventDefault();

    createList(isLists, setIsLists, inputNameList);

    setInputNameList("");
    handleClose();
  }

  function handleSaveRename(e) {
    e.preventDefault();
    const newList = [...isLists];
    newList.forEach((list) => {
      if (list.listId === currentListId) {
        list.name = inputNameList;
      }
    });

    setIsLists(newList);
    handleClose();
  }

  return (
    <>
      <div className="container-my-list-main">
        <div className="container-my-list-hear">
          <h2>My List</h2>
          <button onClick={handleOpen}>
            <img src="/image/icon/plus.png" />
            create list
          </button>
        </div>
        <div className="container-list-items">
          {isLists.length === 0 ? (
            <div className="no-have-list">No Have List</div>
          ) : (
            isLists.map((list) => {
              return (
                <ItemsList
                  key={list.listId}
                  list={list}
                  isLists={isLists}
                  setIsLists={setIsLists}
                  setIsOpenPopup={setIsOpenPopup}
                  setIsAnimation={setIsAnimation}
                  setIsRename={setIsRename}
                  setCurrentListId={setCurrentListId}
                />
              );
            })
          )}
        </div>
      </div>
      <div
        className={`overlay-create-new-list`}
        style={{
          display: isOpenPopup ? "flex" : "none",
        }}
      >
        <div className={`container-popup-create-list ${isAnimation}`}>
          <div>
            <h4>{isRename ? "Make new name" : "Add your new list"}</h4>
            <button onClick={handleClose}>
              <img src="/image/icon/close.png" />
            </button>
          </div>
          <form onSubmit={isRename ? handleSaveRename : handleCreateList}>
            <p>{isRename ? "Change to new list name" : "Cerate a new list"}</p>
            <input
              placeholder={isRename ? "My new name list..." : "My name list..."}
              onChange={handleInputName}
              value={inputNameList}
              required
            />
            <button type="submit">{isRename ? "Save" : "Create"}</button>
          </form>
        </div>
      </div>
    </>
  );
}
