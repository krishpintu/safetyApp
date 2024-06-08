import React from "react";
import HomeIcon from "@heroicons/react/24/outline/HomeIcon";
import HomeIconSolid from "@heroicons/react/24/solid/HomeIcon";
import DocumentPlusIcon from "@heroicons/react/24/outline/DocumentPlusIcon";
import DocumentPlusIconSolid from "@heroicons/react/24/solid/DocumentPlusIcon";
import DocumentMagnifyingGlassIcon from "@heroicons/react/24/outline/DocumentMagnifyingGlassIcon";
import DocumentMagnifyingGlassIconSolid from "@heroicons/react/24/solid/DocumentMagnifyingGlassIcon";
import ClipboardDocumentCheckIcon from "@heroicons/react/24/outline/ClipboardDocumentCheckIcon";
import ClipboardDocumentCheckIconSolid from "@heroicons/react/24/solid/ClipboardDocumentCheckIcon";

import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";
import IMenuItem from "../types/IMenuItem";
import NmcReporting from "@/pages/aect/NmcReporting";

const Dashboard = React.lazy(() => import("@/pages/aect/Dashboard"));
const LogAect = React.lazy(() => import("@/pages/aect/LogAect"));
const ViewAect = React.lazy(() => import("@/pages/aect/ViewAect"));
const CloseAECT = React.lazy(() => import("@/pages/aect/CloseAECT"));
const LogNMC = React.lazy(() => import("@/pages/aect/LogNMC"));
const ViewNMC = React.lazy(() => import("@/pages/aect/ViewNMC"));
const AectReporting = React.lazy(() => import("@/pages/aect/AectReporting"));
const PageNotFound = React.lazy(() => import("@/pages/PageNotFound"));

const AECT_MENU_LIST: IMenuItem[] = [
  {
    id: 101,
    name: "",
    icon: <HomeIcon className="w-5 h-5" />,
    iconSelected: <HomeIconSolid className="w-5 h-5" />,
    appId: 3,
    path: "",
    element: <Dashboard />,
    children: [],
    menuType: "Static",
  },
  {
    id: 101,
    name: "Dashboard",
    icon: <HomeIcon className="w-5 h-5" />,
    iconSelected: <HomeIconSolid className="w-5 h-5" />,
    appId: 3,
    path: "dashboard",
    element: <Dashboard />,
    children: [],
    menuType: "Normal",
  },
  {
    id: 102,
    name: "Log AECT",
    icon: <DocumentPlusIcon className="w-5 h-5" />,
    iconSelected: <DocumentPlusIconSolid className="w-5 h-5" />,
    appId: 3,
    path: "log-aect",
    element: <LogAect />,
    children: [],
    menuType: "Normal",
  },
  {
    id: 103,
    name: "View AECT",
    icon: <DocumentMagnifyingGlassIcon className="w-5 h-5" />,
    iconSelected: <DocumentMagnifyingGlassIconSolid className="w-5 h-5" />,
    appId: 3,
    path: "view-aect",
    element: <ViewAect />,
    children: [],
    menuType: "Normal",
  },
  {
    id: 106,
    name: "Close AECT",
    icon: <ClipboardDocumentCheckIcon className="w-5 h-5" />,
    iconSelected: <ClipboardDocumentCheckIconSolid className="w-5 h-5" />,
    appId: 3,
    path: "close-aect",
    element: <CloseAECT />,
    children: [],
    menuType: "Normal",
  },
  {
    id: 104,
    name: "Log NMC",
    icon: <DocumentPlusIcon className="w-5 h-5" />,
    iconSelected: <DocumentPlusIconSolid className="w-5 h-5" />,
    appId: 3,
    path: "log-nmc",
    element: <LogNMC />,
    children: [],
    menuType: "Normal",
  },
  {
    id: 105,
    name: "View NMC",
    icon: <DocumentMagnifyingGlassIcon className="w-5 h-5" />,
    iconSelected: <DocumentMagnifyingGlassIconSolid className="w-5 h-5" />,
    appId: 3,
    path: "view-nmc",
    element: <ViewNMC />,
    children: [],
    menuType: "Normal",
  },
  {
    id: 285,
    name: "Reports",
    icon: <AdjustmentsHorizontalIcon className="w-5 h-5" />,
    iconSelected: <AdjustmentsHorizontalIcon className="w-5 h-5" />,
    appId: 3,
    path: "",
    element: null,
    children: [
      {
        id: 286,
        name: "AECT Reporting",
        icon: <ClipboardDocumentCheckIcon className="w-5 h-5" />,
        iconSelected: <ClipboardDocumentCheckIconSolid className="w-5 h-5" />,
        appId: 3,
        path: "aect-reporting",
        element: <AectReporting />,
        children: [],
        menuType: "Normal",
      },
      {
        id: 287,
        name: "NMC Reporting",
        icon: <ClipboardDocumentCheckIcon className="w-5 h-5" />,
        iconSelected: <ClipboardDocumentCheckIconSolid className="w-5 h-5" />,
        appId: 3,
        path: "nmc-reporting",
        element: <NmcReporting />,
        children: [],
        menuType: "Normal",
      },
    ],
    menuType: "Normal",
  },
  {
    id: 0,
    name: "",
    icon: <HomeIcon className="w-5 h-5" />,
    iconSelected: <HomeIconSolid className="w-5 h-5" />,
    appId: 3,
    path: "*",
    element: <PageNotFound />,
    children: [],
    menuType: "Static",
  },
];

export default AECT_MENU_LIST;
