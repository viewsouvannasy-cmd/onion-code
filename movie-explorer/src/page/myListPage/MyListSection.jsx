import { useState } from "react";

export function MyListSection() {
  const [isFocus, setIsFocus] = useState(false);
  return (
    <>
      <div className="container-my-list-main">
        <div className="container-my-list-hear">
          <h2>My List</h2>
          <button>
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
        </div>
      </div>
    </>
  );
}
