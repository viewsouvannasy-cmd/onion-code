import { useState, useEffect } from "react";

export function MyListSection() {
  const [isFocus, setIsFocus] = useState(false);
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
          <div className="no-have-list">No Have List</div>
          <div className="list-items">
            <div className="box-image">
              <img src="https://template.canva.com/EAFPIQwWiNQ/2/0/1131w-qYpFmmYmnJo.jpg" />
            </div>
            <div className="list-detail">
              <h4>
                Action <span>2 items</span>
              </h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Corrupti aliquam ratione nesciunt quos, nemo a doloribus
                voluptatibus aliquid id odio dolorum officiis architecto
                mollitia modi placeat eos quidem quae at!
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
              <button>Delete</button>
            </div>
          </div>
          <div className="list-items">
            <div className="box-image">
              <img src="https://template.canva.com/EAFPIQwWiNQ/2/0/1131w-qYpFmmYmnJo.jpg" />
            </div>
            <div className="list-detail">
              <h4>
                Action <span>2 items</span>
              </h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Corrupti aliquam ratione nesciunt quos, nemo a doloribus
                voluptatibus aliquid id odio dolorum officiis architecto
                mollitia modi placeat eos quidem quae at!
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
              <button>Delete</button>
            </div>
          </div>
          <div className="list-items">
            <div className="box-image">
              <img src="https://template.canva.com/EAFPIQwWiNQ/2/0/1131w-qYpFmmYmnJo.jpg" />
            </div>
            <div className="list-detail">
              <h4>
                Action <span>2 items</span>
              </h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Corrupti aliquam ratione nesciunt quos, nemo a doloribus
                voluptatibus aliquid id odio dolorum officiis architecto
                mollitia modi placeat eos quidem quae at!
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
              <button>Delete</button>
            </div>
          </div>
          <div className="list-items">
            <div className="box-image">
              <img src="https://template.canva.com/EAFPIQwWiNQ/2/0/1131w-qYpFmmYmnJo.jpg" />
            </div>
            <div className="list-detail">
              <h4>
                Action <span>2 items</span>
              </h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Corrupti aliquam ratione nesciunt quos, nemo a doloribus
                voluptatibus aliquid id odio dolorum officiis architecto
                mollitia modi placeat eos quidem quae at!
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
              <button>Delete</button>
            </div>
          </div>
          <div className="list-items">
            <div className="box-image">
              <img src="https://template.canva.com/EAFPIQwWiNQ/2/0/1131w-qYpFmmYmnJo.jpg" />
            </div>
            <div className="list-detail">
              <h4>
                Action <span>2 items</span>
              </h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Corrupti aliquam ratione nesciunt quos, nemo a doloribus
                voluptatibus aliquid id odio dolorum officiis architecto
                mollitia modi placeat eos quidem quae at!
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
              <button>Delete</button>
            </div>
          </div>
          <div className="list-items">
            <div className="box-image">
              <img src="https://template.canva.com/EAFPIQwWiNQ/2/0/1131w-qYpFmmYmnJo.jpg" />
            </div>
            <div className="list-detail">
              <h4>
                Action <span>2 items</span>
              </h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Corrupti aliquam ratione nesciunt quos, nemo a doloribus
                voluptatibus aliquid id odio dolorum officiis architecto
                mollitia modi placeat eos quidem quae at!
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
              <button>Delete</button>
            </div>
          </div>
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
          <div>
            <p>Create a new list</p>
            <input placeholder="My name list..." />
            <button>Create</button>
          </div>
        </div>
      </div>
    </>
  );
}
