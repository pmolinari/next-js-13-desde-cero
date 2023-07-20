export const Routes = {
  HOME: {
    path: "/",
    name: "Home",
  },
  CHARACTERS: {
    path: "/characters",
    name: "characters",
  },
  LOCATIONS: {
    path: "/locations",
    name: "locations",
  },
  DASHBOARD: {
    path: "/dashboard",
    name: "dashboard",
  },
};

export interface Route {
  path: string;
  name: string;
}
