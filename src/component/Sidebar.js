export default function Sidebar() {
  const menus = [
    {
      img: "/images/icon_dashboard.png",
      title: "Dashboard",
    },
    {
      img: "/images/icon_available.png",
      title: "Available units",
    },
    {
      img: "/images/icon_invoices.png",
      title: "Invoices",
    },
    {
      img: "/images/icon_projects.png",
      title: "Projects",
    },
    {
      img: "/images/icon_social.png",
      title: "Social media",
    },
    {
      img: "/images/icon_integration.png",
      title: "Integrations",
    },
    {
      img: "/images/icon_documentation.png",
      title: "Documentation",
    },
  ];
  return (
    <div className="left-sidebar">
      <div className="sidebar-header">
        <img className="sidebar-img logo" src="/images/logo.png" />
      </div>
      <div className="sidebar-menu">
        {menus.map((menu, index) => {
          return (
            <div
              className={
                "sidebar-items " +
                (menu.title == "Projects" ? "active-menu" : "")
              }
              key={index}
            >
              <img className="sidebar-img" src={menu.img} />
              <p>{menu.title}</p>
            </div>
          );
        })}
      </div>
      <div className="sidebar-options">
        <div className="sidebar-items">
          <img className="sidebar-img" src="/images/icon_settings.png" />
          <p>Settings</p>
        </div>
        <div className="sidebar-items">
          <img className="sidebar-img" src="/images/icon_help.png" />
          <p>Help center</p>
        </div>
      </div>
      <div className="profile">
        <img className="sidebar-img" src="/images/profile.png" />
        <div>
          <div className="name">Louise Thompson</div>
          <div className="plan">Enterprise plan</div>
        </div>
      </div>
    </div>
  );
}
