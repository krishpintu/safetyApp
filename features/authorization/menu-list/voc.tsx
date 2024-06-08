import React from "react";
import HomeIcon from "@heroicons/react/24/outline/HomeIcon";
import HomeIconSolid from "@heroicons/react/24/solid/HomeIcon";
import ChartBarSquareIcon from "@heroicons/react/24/outline/ChartBarSquareIcon";
import ChartBarSquareIconSolid from "@heroicons/react/24/solid/ChartBarSquareIcon";
import DocumentTextIcon from "@heroicons/react/24/outline/DocumentTextIcon";
import DocumentTextIconSolid from "@heroicons/react/24/solid/DocumentTextIcon";

import IMenuItem from "../types/IMenuItem";
import CCARReport from "@/pages/voc/CCARReport";
import TopQualityIssues from "@/pages/voc/TopQualityIssues";
import FYStatus from "@/pages/voc/FYStatus";
import CPAList from "@/pages/voc/CPAList";
import IssueDashboard from "@/pages/voc/IssueDashboard";

const Dashboard = React.lazy(() => import("@/pages/voc/Dashboard"));
const PageNotFound = React.lazy(() => import("@/pages/PageNotFound"));

const VOC_MENU_LIST: IMenuItem[] = [
  {
    id: 250,
    name: "",
    icon: <HomeIcon className="w-5 h-5" />,
    iconSelected: <HomeIconSolid className="w-5 h-5" />,
    appId: 7,
    path: "",
    element: <Dashboard />,
    children: [],
    menuType: "Static",
  },
  {
    id: 250,
    name: "Dashboard",
    icon: <HomeIcon className="w-5 h-5" />,
    iconSelected: <HomeIconSolid className="w-5 h-5" />,
    appId: 7,
    path: "dashboard",
    element: <Dashboard />,
    children: [],
    menuType: "Normal",
  },
  {
    id: 292,
    name: "Issue Dashboard",
    icon: <ChartBarSquareIcon className="w-5 h-5" />,
    iconSelected: <ChartBarSquareIconSolid className="w-5 h-5" />,
    appId: 7,
    path: "issue-dashboard",
    element: <IssueDashboard />,
    children: [],
    menuType: "Normal",
  },
  {
    id: 251,
    name: "CCAR Action Report",
    icon: <DocumentTextIcon className="w-5 h-5" />,
    iconSelected: <DocumentTextIconSolid className="w-5 h-5" />,
    appId: 7,
    path: "ccar-action-report",
    element: <CCARReport />,
    children: [],
    menuType: "Normal",
  },
  {
    id: 252,
    name: "Top Quality Issues",
    icon: <DocumentTextIcon className="w-5 h-5" />,
    iconSelected: <DocumentTextIconSolid className="w-5 h-5" />,
    appId: 7,
    path: "top-quality-issues",
    element: <TopQualityIssues />,
    children: [],
    menuType: "Normal",
  },
  {
    id: 253,
    name: "FY Status Graph",
    icon: <ChartBarSquareIcon className="w-5 h-5" />,
    iconSelected: <ChartBarSquareIconSolid className="w-5 h-5" />,
    appId: 7,
    path: "fy-status-graph",
    element: <FYStatus />,
    children: [],
    menuType: "Normal",
  },
  {
    id: 289,
    name: "Issue List",
    icon: <DocumentTextIcon className="w-5 h-5" />,
    iconSelected: <DocumentTextIconSolid className="w-5 h-5" />,
    appId: 7,
    path: "cpa-list",
    element: <CPAList />,
    children: [],
    menuType: "Normal",
  },

  {
    id: 0,
    name: "",
    icon: <HomeIcon className="w-5 h-5" />,
    iconSelected: <HomeIconSolid className="w-5 h-5" />,
    appId: 7,
    path: "*",
    element: <PageNotFound />,
    children: [],
    menuType: "Static",
  },
];

export default VOC_MENU_LIST;
