import Solutions from "../pages/solutions";
import {RouteProps} from "react-router";
import Classes from "../pages/classes";
export const routerConfig:RouteProps[] = [
  {
    path: '/solution',
    component: Solutions
  },
  {
    path: '/classes',
    component: Classes
  },
]