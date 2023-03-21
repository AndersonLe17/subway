const items = [
  {
    headMenu: "Home",
    navs: [
      {
        title: "Dashboard",
        icon: <i className="fa-regular fa-house"></i>,
        to: "/",
        links: [],
      },
    ],
  },
  {
    headMenu: "Menu",
    navs: [
      {
        title: "Layouts1",
        icon: <i className="fa-regular fa-table-layout"></i>,
        to: "",
        index: 0,
        links: [
          { action: "Item1", to: "#a", idx: "Menu1" },
          { action: "Item2", to: "#b", idx: "Menu2" },
        ],
      },
      {
        title: "Layouts2",
        icon: <i className="fa-regular fa-table-layout"></i>,
        to: "",
        index: 1,
        links: [
          { action: "Item3", to: "#c", idx: "Menu3" },
          { action: "Item4", to: "#d", idx: "Menu4" },
        ],
      },
    ],
  },
];

export default items;
