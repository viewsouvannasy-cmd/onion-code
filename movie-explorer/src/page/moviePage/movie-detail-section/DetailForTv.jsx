export function DetailForTv({ detailMovie }) {
  return (
    <>
      <div className="container-detail-header-season">
        {detailMovie?.seasons?.map((season) => {
          if (season.name.includes("Season")) {
            return <button key={season.id}>{season.name}</button>;
          }
        })}
      </div>
      <div className="container-episode">
        <div className="episode-item">
          <div>
            <p>1</p>
            <div className="box-image-episode">
              <img src="https://m.media-amazon.com/images/S/pv-target-images/8f7bb5cbf76838b15b11890a71fb20e57f36b7833f9f8bcdba6e6d8804bec862._UR1920,1080_SX624_FMjpg_.jpg" />
            </div>
            <div className="box-title-of-episode">
              <p>top of Episode</p>
              <span>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto
                expedita suscipit quis numquam optio officiis?
              </span>
            </div>
          </div>
          <div>24m</div>
        </div>
      </div>
    </>
  );
}
