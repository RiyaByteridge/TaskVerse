import { Signup ,Login} from "../components";
import { AppPath } from "./RouteNames";

export interface IRouteConfig {
    path: string;
    component: React.ComponentType<unknown>;
    children?: IRouteConfig[]; 
   
  }
  const PublicRoutes: IRouteConfig[] = [
    {
      path: AppPath.login,
      component: Login,
    },
    {
      path: AppPath.signup,
      component: Signup,
    },
]

export { PublicRoutes };