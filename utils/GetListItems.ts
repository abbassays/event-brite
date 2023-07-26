export const getSettingsSidebarItems = (role: string) => {
  const sidebarItems = [
    "Profile",
    "Password",
    "Billing Address",
    "My Orders", //not for admin
    "Stripe Details", //only for organiser and admin
    "Payment Configuration", // only for admin
  ];
  const filteredSidebarItems = sidebarItems.filter((item) => {
    if (item === "My Orders" && role === "ADMIN") return false;
    if (item === "Payment Configuration" && role !== "ADMIN") return false;
    if (item === "Stripe Details" && (role === "STAFF" || role === "CUSTOMER"))
      return false;
    return true;
  });

  return filteredSidebarItems;
};

export const getNavbarItems = (role: string) => {
  const customerNavbarItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Events",
      link: "/events",
    },
    {
      name: "Cart",
      link: "/cart",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];

  const staffNavbarItems = [
    {
      name: "Dashboard",
      link: "/dashboard",
    },
  ];

  const filteredNavbarItems =
    role === "CUSTOMER" || !role ? customerNavbarItems : staffNavbarItems;

  return filteredNavbarItems;
};

export const getDashboardSidebarItems = (role: string) => {
  if (!role) return [];

  const sideBarItems = [
    {
      name: "Dashboard",
      route: "/dashboard",
    },
    {
      name: "Events",
      route: "/dashboard/events",
    },
    {
      name: "Tickets",
      route: "/dashboard/tickets",
    },
    {
      name: "Sales",
      route: "/dashboard/sales",
    },
    {
      //admin only
      name: "Organisers",
      route: "/dashboard/organisers",
    },
    {
      //organiser and admin only
      name: "Staff Members",
      route: "/dashboard/staff",
    },
    {
      name: "Check-Ins",
      route: "/dashboard/check-ins",
    },
  ];

  const filteredSidebarItems = sideBarItems.filter((item) => {
    if (item.name === "Organisers" && role !== "ADMIN") return false;
    if (
      item.name === "Staff Members" &&
      (role === "CUSTOMER" || role === "STAFF")
    )
      return false;

    return true;
  });

  return filteredSidebarItems;
};
