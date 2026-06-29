import { useState, useEffect } from "react";
import { ItemsList } from "./ItemsList";

export function MyListSection({ isLists, setIsLists }) {
  const [inputNameList, setInputNameList] = useState("");
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const [isAnimation, setIsAnimation] = useState("");

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
    setTimeout(() => {
      setIsOpenPopup(false);
    }, 100);
  }

  function handleInputName(e) {
    setInputNameList(e.target.value);
  }

  function handleCreateList(e) {
    e.preventDefault();

    setIsLists([
      ...isLists,
      {
        listId: crypto.randomUUID(),
        name: inputNameList,
        listItems: [],
      },
    ]);

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
        <form
          onSubmit={handleCreateList}
          className={`container-popup-create-list list ${isAnimation}`}
        >
          <div>
            <h4>Add your new list</h4>
            <button onClick={handleClose}>
              <img src="/image/icon/close.png" />
            </button>
          </div>
          <div>
            <p>Create a new list</p>
            <input
              placeholder="My name list..."
              onChange={handleInputName}
              required
            />
            <button type="submit">Create</button>
          </div>
        </form>
      </div>
    </>
  );
}
