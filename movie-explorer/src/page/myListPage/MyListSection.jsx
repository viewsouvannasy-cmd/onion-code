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

    const random = Math.floor(Math.random() * 2) + 1;
    let color;

    if (random === 1) {
      color =
        "linear-gradient(220deg,#ffffff 0%,#a0d755 50%,#76ad2b 80%,#4b8200 100%)";
    } else {
      color = "linear-gradient(210deg,#ffffff -40%,#b45a82 60%,#72143e 100% )";
    }

    setIsLists([
      ...isLists,
      {
        listId: crypto.randomUUID(),
        name: inputNameList,
        background: color,
        listItems: [],
      },
    ]);

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
        <div className={`container-popup-create-list list ${isAnimation}`}>
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
