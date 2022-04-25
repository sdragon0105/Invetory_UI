export default function DashboardCard(props) {
  return (
    <div className="card">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div className="title">{props.title}</div>
        <div className="value">{props.value}</div>
      </div>
      <img src={props.dashIcon} />
    </div>
  );
}
