import React from "react";
import HomeIcon from "@heroicons/react/24/outline/HomeIcon";
import HomeIconSolid from "@heroicons/react/24/solid/HomeIcon";
import DocumentTextIcon from "@heroicons/react/24/outline/DocumentTextIcon";
import DocumentTextIconSolid from "@heroicons/react/24/solid/DocumentTextIcon";

import IMenuItem from "../types/IMenuItem";

const Dashboard = React.lazy(() => import("@/pages/andon/Dashboard"));
const AndonLossesEntry = React.lazy(
  () => import("@/pages/andon/AndonLossesEntry"),
);
/* const AndonStatus = React.lazy(() => import("@/pages/andon/AndonStatus")); */
const LossTypeAndReason = React.lazy(
  () => import("@/pages/andon/LossTypeAndReason"),
);
const PageNotFound = React.lazy(() => import("@/pages/PageNotFound"));

const ANDON_MENU_LIST: IMenuItem[] = [
  {
    id: 270,
    name: "",
    icon: <HomeIcon className="h-5 w-5" />,
    iconSelected: <HomeIconSolid className="h-5 w-5" />,
    appId: 9,
    path: "",
    element: <Dashboard />,
    children: [],
    menuType: "Static",
  },
  {
    id: 270,
    name: "Dashboard",
    icon: <HomeIcon className="h-5 w-5" />,
    iconSelected: <HomeIconSolid className="h-5 w-5" />,
    appId: 9,
    path: "dashboard",
    element: <Dashboard />,
    children: [],
    menuType: "Normal",
  },
  {
    id: 271,
    name: "Andon Losses Entry",
    icon: <DocumentTextIcon className="h-5 w-5" />,
    iconSelected: <DocumentTextIconSolid className="h-5 w-5" />,
    appId: 9,
    path: "andon-losses-entry",
    element: <AndonLossesEntry />,
    children: [],
    menuType: "Normal",
  },
  /*   {
    id: 272,
    name: "Andon Status",
    icon: <DocumentTextIcon className="h-5 w-5" />,
    iconSelected: <DocumentTextIconSolid className="h-5 w-5" />,
    appId: 9,
    path: "andon-status",
    element: <AndonStatus />,
    children: [],
    menuType: "Normal",
  }, */
  {
    id: 273,
    name: "Loss Type And Reason",
    icon: <DocumentTextIcon className="h-5 w-5" />,
    iconSelected: <DocumentTextIconSolid className="h-5 w-5" />,
    appId: 9,
    path: "loss-type-and-reason",
    element: <LossTypeAndReason />,
    children: [],
    menuType: "Normal",
  },
  {
    id: 0,
    name: "",
    icon: <HomeIcon className="h-5 w-5" />,
    iconSelected: <HomeIconSolid className="h-5 w-5" />,
    appId: 9,
    path: "*",
    element: <PageNotFound />,
    children: [],
    menuType: "Static",
  },
];

export default ANDON_MENU_LIST;
