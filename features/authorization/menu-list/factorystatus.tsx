import React from "react";
import HomeIcon from "@heroicons/react/24/outline/HomeIcon";
import HomeIconSolid from "@heroicons/react/24/solid/HomeIcon";
import AdjustmentsHorizontalIcon from "@heroicons/react/24/outline/AdjustmentsHorizontalIcon";
import AdjustmentsHorizontalIconSolid from "@heroicons/react/24/solid/AdjustmentsHorizontalIcon";
import FolderIcon from "@heroicons/react/24/outline/FolderIcon";
import FolderIconSolid from "@heroicons/react/24/solid/FolderIcon";
import ChartBarSquareIcon from "@heroicons/react/24/outline/ChartBarSquareIcon";
import ChartBarSquareIconSolid from "@heroicons/react/24/solid/ChartBarSquareIcon";

import IMenuItem from "../types/IMenuItem";

const Dashboard = React.lazy(() => import("@/pages/factorystatus/Dashboard"));
const SQPDashboard = React.lazy(
  () => import("@/pages/factorystatus/SQPDashboard"),
);
const FactoryType = React.lazy(
  () => import("@/pages/factorystatus/administration/FactoryType"),
);
const PageNotFound = React.lazy(() => import("@/pages/PageNotFound"));

const FACTORYSTATUS_MENU_LIST: IMenuItem[] = [
  {
    id: 230,
    name: "",
    icon: <HomeIcon className="h-5 w-5" />,
    iconSelected: <HomeIconSolid className="h-5 w-5" />,
    appId: 6,
    path: "",
    element: <Dashboard />,
    children: [],
    menuType: "Static",
  },
  {
    id: 230,
    name: "Dashboard",
    icon: <HomeIcon className="h-5 w-5" />,
    iconSelected: <HomeIconSolid className="h-5 w-5" />,
    appId: 6,
    path: "dashboard",
    element: <Dashboard />,
    children: [],
    menuType: "Normal",
  },
  {
    id: 231,
    name: "Administration",
    icon: <AdjustmentsHorizontalIcon className="h-5 w-5" />,
    iconSelected: <AdjustmentsHorizontalIconSolid className="h-5 w-5" />,
    appId: 6,
    path: "",
    element: null,
    children: [
      {
        id: 232,
        name: "Factory Type",
        icon: <FolderIcon className="h-5 w-5" />,
        iconSelected: <FolderIconSolid className="h-5 w-5" />,
        appId: 6,
        path: "factory-type",
        element: <FactoryType />,
        children: [],
        menuType: "Normal",
      },
    ],
    menuType: "Normal",
  },
  {
    id: 233,
    name: "SQPDCME Dashboard",
    icon: <ChartBarSquareIcon className="h-5 w-5" />,
    iconSelected: <ChartBarSquareIconSolid className="h-5 w-5" />,
    appId: 6,
    path: "sqpdcme-dashboard",
    element: <SQPDashboard />,
    children: [],
    menuType: "Normal",
  },
  {
    id: 0,
    name: "",
    icon: <HomeIcon className="h-5 w-5" />,
    iconSelected: <HomeIconSolid className="h-5 w-5" />,
    appId: 6,
    path: "*",
    element: <PageNotFound />,
    children: [],
    menuType: "Static",
  },
];

export default FACTORYSTATUS_MENU_LIST;
