import {
  UserGroupIcon,
  CodeBracketIcon,
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  BellIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
  DocumentChartBarIcon,
  CurrencyDollarIcon
} from "@heroicons/react/24/solid";
import { Home, Profile, WatchLists, Scripts, Setting, Chainlink} from "@/pages/dashboard";
import { Login, SignUp } from "@/pages/auth";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <BellIcon {...icon} />,
        name: "setting",
        path: "/setting",
        element: <Setting />,
      },
      {
        icon: <HomeIcon {...icon} />,
        name: "dashboard",
        path: "/home",
        element: <Home />,
      },
      {
        icon: <UserGroupIcon {...icon} />,
        name: "watchlist",
        path: "/watchlist",
        element: <WatchLists />,
      },
      {
        icon: <CodeBracketIcon {...icon} />,
        name: "scripts",
        path: "/scripts",
        element: <Scripts />,
      },
      {
        icon: <DocumentChartBarIcon {...icon} />,
        name: "chainlink",
        path: "/chainlink",
        element: <Chainlink />,
      }
        

    ],
  },
  {
    layout: "auth",
    pages: [
      {
        icon: <ArrowRightOnRectangleIcon {...icon} />,
        hidden: true,
        name: "log in",
        path: "/login",
        element: <Login />,
      },
      {
        icon: <UserPlusIcon {...icon} />,
        hidden: true,
        name: "sign up",
        path: "/create-account",
        element: <SignUp />,
      }
    ],
  },
];

export default routes;
