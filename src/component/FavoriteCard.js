export default function FavoriteCard(props) {
  return (
    <div className="card">
      <img className="preview" src={props.favoriteImg} />
      <div className="favorite-title">{props.title}</div>
      <div className="description">{props.description}</div>
      <div className="item-box">
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img src="/images/room.png" />
          <div className="item-title">{props.map}</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img src="/images/icon_badroom.png" />
          <div className="item-title">{props.roomCount} bedrooms</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img src="/images/icon_villa.png" />
          <div className="item-title">Villa</div>
        </div>
      </div>
      <div>
        <button>View listing details</button>
      </div>
    </div>
  );
}
