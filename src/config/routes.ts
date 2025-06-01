import { UserRole } from "@/lib/ability";

interface RoleRoute {
  defaultRoute: string;
  routes: {
    [key: string]: string;
  };
}

const roleRoutes: Record<UserRole, RoleRoute> = {
  Admin: {
    defaultRoute: "/admin/requests",
    routes: {
      requests: "/admin/requests",
      orders: "/admin/orders",
      sellers: "/admin/sellers",
    },
  },
  Provider: {
    defaultRoute: "/provider/home",
    routes: {
      home: "/provider/home",
      orders: "/provider/orders",
      settings: "/provider/settings",
    },
  },
  User: {
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