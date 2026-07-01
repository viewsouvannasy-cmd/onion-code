export function DisplayItemInList({ item }) {
  console.log(item);
  return (
    <div className="item-movie">
      <img src={item.url_backdrop} />
      <div className="background-layer-item-movie"></div>
      <div className="container-add-date">
        <p>
          Add date <span>{item.add_date}</span>
        </p>
        <h2>{item.name}</h2>
      </div>
      <button className="btn-option-delete">
        <img src="/image/icon/dots-white.png" />
      </button>
    </div>
  );
}
