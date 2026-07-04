import { useParams } from "react-router";
import { Link } from "react-router";
import { useState, useEffect } from "react";
import { HeaderSection } from "../../components/Header/HeaderSection";
import { DisplayItem } from "./DisplayItem";

import "./ItemInListPage.css";

export function ItemInListPage({ isLists, setIsLists }) {
  const { listId } = useParams();

  const [currentList, setCurrentList] = useState([]);
  const [selectShape, setSelectShape] = useState("line");
  const [nameList, setNameList] = useState("");
  const [isOpenDelete, setIsOpenDelete] = useState(false);
  const [isAnimation, setIsAnimation] = useState("");
  const [deleteList, setDeleteList] = useState([]);

  function handleSelectShape(shape) {
    setSelectShape(shape);
  }

  useEffect(() => {
    const current = isLists.find((item) => item.listId === listId);

    if (current && current.listItems) {
      // eslint-disable-next-line
      setNameList(current.name);
      setCurrentList(current.listItems);
    } else {
      setNameList("");
      setCurrentList([]);
    }
  }, [isLists, listId]);

  function handleCancel() {
    setIsAnimation("close");
    setTimeout(() => {
      setIsOpenDelete(false);
    }, 550);
  }

  function handleComfirmDelete() {
    const currentList = [...isLists];
    currentList.forEach((list) => {
      if (list.listId === listId) {
        let newListItem = [];
        for (let i = 0; i < list.listItems.length; i++) {
          if (list.listItems[i].id !== deleteList[i]) {
            newListItem.push(list.listItems[i]);
          } else {
            continue;
          }
        }
        list.listItems = newListItem;
      }
    });
    setIsLists(currentList);
    handleCancel();
  }

  return (
    <>
      <HeaderSection />

      <div className="container-list-main">
        <div className="container-list-header">
          <div>
            <Link to="/mylist" className="back-to-list">
              <img src="/image/icon/left-arrow.png" />
            </Link>
          </div>
          <div>
            <h2>
              {nameList}
              <span>
                {" "}
                {currentList.length} {currentList.length > 0 ? "items" : "item"}
              </span>
            </h2>
            <div className="box-select">
              <button
                className={`line-btn ${selectShape === "line" ? "select" : "not-select"}`}
                onClick={() => handleSelectShape("line")}
              >
                Line
              </button>
              <button
                className={`grid-btn ${selectShape === "grid" ? "select" : "not-select"}`}
                onClick={() => handleSelectShape("grid")}
              >
                Grid
              </button>
            </div>
          </div>
        </div>
        <div className={`container-item-in-list-${selectShape}`}>
          {currentList.map((item) => {
            return (
              <DisplayItem
                key={item.id}
                item={item}
                isLists={isLists}
                setIsLists={setIsLists}
                listId={listId}
                setIsOpenDelete={setIsOpenDelete}
                setIsAnimation={setIsAnimation}
                isAnimation={isAnimation}
                isOpenDelete={isOpenDelete}
                setDeleteList={setDeleteList}
                deleteList={deleteList}
              />
            );
          })}
        </div>
      </div>
      <div
        className="container-select-delete-popup"
        style={{ display: isOpenDelete ? "flex" : "none" }}
      >
        <div className={`container-btn ${isAnimation}`}>
          <p>{deleteList.length}</p>
          <button onClick={handleComfirmDelete}>
            <img src="/image/icon/tick.png" />
          </button>
          <button onClick={handleCancel}>cancel</button>
          <button>
            <img src="/image/icon/more.png" />
          </button>
        </div>
      </div>
    </>
  );
}
