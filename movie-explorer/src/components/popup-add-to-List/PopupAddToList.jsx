import { useState } from "react";
import { DisplayListItems } from "./DisplayListItems";
import { createList } from "../../utils/createList";

import "./PopupAddToList.css";

export function PopupAddToList({
  isBackground,
  setIsBackground,
  isAnimation,
  setIsAnimation,
  isLists,
  setIsLists,
  currentMovie,
}) {
  const [inputNameList, setInputNameList] = useState("");

  function handleClose() {
    setIsAnimation("close");
    setInputNameList("");
    setTimeout(() => {
      setIsBackground(false);
    }, 100);
  }

  function handleInputNameList(e) {
    setInputNameList(e.target.value);
  }

  function handleCreateList(e) {
    e.preventDefault();

    createList(isLists, setIsLists, inputNameList);

    setInputNameList("");
    handleClose();
  }

  return (
    <div
      className="overlay-background"
      style={{ display: isBackground ? "flex" : "none" }}
    >
      <div className={`container-add-list ${isAnimation}`}>
        <div className="title-create-list">
          <p>Add to list</p>
          <button onClick={handleClose}>
            <img src="/image/icon/close.png" />
          </button>
        </div>
        <div className={isLists.length === 0 ? "not-have-list" : "box-list"}>
          {isLists.length === 0 ? (
            <>
              <p className="not-found">not found list.</p>
              <form onSubmit={handleCreateList}>
                <span>Create your new list</span>
                <input
                  placeholder="My list name..."
                  value={inputNameList}
                  onChange={handleInputNameList}
                  required
                />
                <button type="submit">Create</button>
              </form>
            </>
          ) : (
            isLists.map((list) => {
              return (
                <DisplayListItems
                  key={list.listId}
                  list={list}
                  isLists={isLists}
                  setIsLists={setIsLists}
                  currentMovie={currentMovie}
                  handleClose={handleClose}
                />
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
