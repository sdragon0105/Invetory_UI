import DashboardCard from "./DashboardCard";
import FavoriteCard from "./FavoriteCard";

export default function Projects() {
  const dashboard = [
    {
      title: "Todays sales",
      value: "2,456",
      dashIcon: "/images/sales.png",
    },
    {
      title: "New Products",
      value: "221",
      dashIcon: "/images/new_products.png",
    },
    {
      title: "Inventory",
      value: "1,425",
      dashIcon: "/images/inventory.png",
    },
  ];

  const favorites = [
    {
      img: "/images/image1.png",
      title: "Boston family home",
      description:
        "A beautiful townhouse in the heart of Minmi's down town district. With 3 bedrooms and a heated pool.",
      map: "Boston",
      roomCount: 5,
    },
    {
      img: "/images/image2.png",
      title: "Miami beach house",
      description:
        "A beautiful townhouse in the heart of Minmi's down town district. With 3 bedrooms and a heated pool.",
      map: "Boston",
      roomCount: 5,
    },
    {
      img: "/images/image3.png",
      title: "New York Townhouse",
      description:
        "A beautiful townhouse in the heart of Minmi's down town district. With 3 bedrooms and a heated pool.",
      map: "Boston",
      roomCount: 5,
    },
    {
      img: "/images/image4.png",
      title: "Beachfront Mansion Miami",
      description:
        "A beautiful townhouse in the heart of Minmi's down town district. With 3 bedrooms and a heated pool.",
      map: "Boston",
      roomCount: 5,
    },
    {
      img: "/images/image5.png",
      title: "Hamptons Villa",
      description:
        "A beautiful townhouse in the heart of Minmi's down town district. With 3 bedrooms and a heated pool.",
      map: "Boston",
      roomCount: 5,
    },
    {
      img: "/images/image6.png",
      title: "San Fransisco Condo",
      description:
        "A beautiful townhouse in the heart of Minmi's down town district. With 3 bedrooms and a heated pool.",
      map: "Boston",
      roomCount: 5,
    },
  ];

  return (
    <div className="project">
      <div className="dashboard">
        <div className="title">Your dashboard</div>
        <div className="dashboard-cards">
          {dashboard.map((item, index) => {
            return (
              <DashboardCard
                key={index}
                title={item.title}
                value={item.value}
                dashIcon={item.dashIcon}
              />
            );
          })}
        </div>
      </div>
      <div className="favorites">
        <div className="title">Your favorites</div>
        <div className="favorites-cards">
          {favorites.map((item, index) => {
            return (
              <FavoriteCard
                key={index}
                title={item.title}
                description={item.description}
                favoriteImg={item.img}
                map={item.map}
                roomCount={item.roomCount}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
