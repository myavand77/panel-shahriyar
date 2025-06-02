import { UserRole } from "@/types";

interface RoleRoute {
  defaultRoute: string;
  routes: {
    [key: string]: string;
  };
}

const roleRoutes: Record<UserRole, RoleRoute> = {
  commercial: {
    defaultRoute: "/admin/requests",
    routes: {
      requests: "/admin/requests",
      orders: "/admin/orders",
      sellers: "/admin/sellers",
    },
  },
  provider: {
    defaultRoute: "/provider/home",
    routes: {
      home: "/provider/home",
      orders: "/provider/orders",
      settings: "/provider/settings",
    },
  },
  user: {
    defaultRoute: "/user/credit",
    routes: {
      credit: "/user/credit",
      purchase: "/user/purchase",
      settings: "/user/settings",
    },
  },
};

export const getDefaultRoute = (role: UserRole): string => {
  return roleRoutes[role]?.defaultRoute || "/auth/login";
};

export const getRouteByKey = (role: UserRole, key: string): string => {
  return roleRoutes[role]?.routes[key] || getDefaultRoute(role);
};

export default roleRoutes;
