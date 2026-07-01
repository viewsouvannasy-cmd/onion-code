import { useState, useEffect } from "react";
import { ItemsList } from "./ItemsList";
import { DisplayItemInList } from "./DisplayIteminList";
import { createList } from "../../utils/createList";

export function MyListSection({ isLists, setIsLists }) {
  const [inputNameList, setInputNameList] = useState("");
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const [isAnimation, setIsAnimation] = useState("");
  const [currentList, setCurrentList] = useState([]);

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
        <div
          className="container-list-items"
          style={{ display: currentList.length > 0 ? "none" : "flex" }}
        >
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
                  setCurrentList={setCurrentList}
                />
              );
            })
          )}
        </div>
        <div
          className="container-item-in-list"
          style={{ display: currentList.length > 0 ? "flex" : "none" }}
        >
          {currentList.map((item) => {
            return <DisplayItemInList key={item.id} item={item} />;
          })}
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
            <h4>Add your new list</h4>
            <button onClick={handleClose}>
              <img src="/image/icon/close.png" />
            </button>
          </div>
          <form onSubmit={handleCreateList}>
            <p>Create a new list</p>
            <input
              placeholder="My name list..."
              onChange={handleInputName}
              value={inputNameList}
              required
            />
            <button type="submit">Create</button>
          </form>
        </div>
      </div>
    </>
  );
}
