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
