import React from "react";
import HomeIcon from "@heroicons/react/24/outline/HomeIcon";
import HomeIconSolid from "@heroicons/react/24/solid/HomeIcon";
import DocumentTextIcon from "@heroicons/react/24/outline/DocumentTextIcon";
import DocumentTextIconSolid from "@heroicons/react/24/solid/DocumentTextIcon";

import IMenuItem from "../types/IMenuItem";

const Dashboard = React.lazy(() => import("@/pages/qcprojects/Dashboard"));
const ViewQCDetails = React.lazy(
  () => import("@/pages/qcprojects/ViewQCDetails"),
);
const PageNotFound = React.lazy(() => import("@/pages/PageNotFound"));

const QCPROJECTS_MENU_LIST: IMenuItem[] = [
  {
    id: 260,
    name: "",
    icon: <HomeIcon className="w-5 h-5" />,
    iconSelected: <HomeIconSolid className="w-5 h-5" />,
    appId: 8,
    path: "",
    element: <Dashboard />,
    children: [],
    menuType: "Static",
  },
  {
    id: 260,
    name: "Dashboard",
    icon: <HomeIcon className="w-5 h-5" />,
    iconSelected: <HomeIconSolid className="w-5 h-5" />,
    appId: 8,
    path: "dashboard",
    element: <Dashboard />,
    children: [],
    menuType: "Normal",
  },
  {
    id: 261,
    name: "View QC Projects",
    icon: <DocumentTextIcon className="w-5 h-5" />,
    iconSelected: <DocumentTextIconSolid className="w-5 h-5" />,
    appId: 8,
    path: "view-qc-details",
    element: <ViewQCDetails />,
    children: [],
    menuType: "Normal",
  },
  {
    id: 0,
    name: "",
    icon: <HomeIcon className="w-5 h-5" />,
    iconSelected: <HomeIconSolid className="w-5 h-5" />,
    appId: 8,
    path: "*",
    element: <PageNotFound />,
    children: [],
    menuType: "Static",
  },
];

export default QCPROJECTS_MENU_LIST;
