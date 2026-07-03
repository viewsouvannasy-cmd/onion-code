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
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
