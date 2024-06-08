import React from "react";
import HomeIcon from "@heroicons/react/24/outline/HomeIcon";
import HomeIconSolid from "@heroicons/react/24/solid/HomeIcon";
import DocumentPlusIcon from "@heroicons/react/24/solid/DocumentPlusIcon";
import DocumentPlusIconSolid from "@heroicons/react/24/outline/DocumentPlusIcon";
import DocumentMagnifyingGlassIcon from "@heroicons/react/24/outline/DocumentMagnifyingGlassIcon";
import DocumentMagnifyingGlassIconSolid from "@heroicons/react/24/solid/DocumentMagnifyingGlassIcon";
import ReviewSuggestion from "@/pages/suggestion/ReviewSuggestion";
import IMenuItem from "../types/IMenuItem";

const Dashboard = React.lazy(() => import("@/pages/suggestion/Dashboard"));
const ViewSuggestion = React.lazy(
  () => import("@/pages/suggestion/ViewSuggestion"),
);
const PageNotFound = React.lazy(() => import("@/pages/PageNotFound"));

const SUGGESTION_MENU_LIST: IMenuItem[] = [
  {
    id: 221,
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
    id: 221,
    name: "Dashboard",
    icon: <HomeIcon className="w-5 h-5" />,
    iconSelected: <HomeIconSolid className="w-5 h-5" />,
    appId: 10,
    path: "dashboard",
    element: <Dashboard />,
    children: [],
    menuType: "Normal",
  },
  {
    id: 274,
    name: "View Suggestions",
    icon: <DocumentPlusIcon className="w-5 h-5" />,
    iconSelected: <DocumentPlusIconSolid className="w-5 h-5" />,
    appId: 10,
    path: "view-suggestion",
    element: <ViewSuggestion />,
    children: [],
    menuType: "Normal",
  },
  {
    id: 275,
    name: "Review Suggestions",
    icon: <DocumentMagnifyingGlassIcon className="w-5 h-5" />,
    iconSelected: <DocumentMagnifyingGlassIconSolid className="w-5 h-5" />,
    appId: 10,
    path: "review-suggestion",
    element: <ReviewSuggestion />,
    children: [],
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

export default SUGGESTION_MENU_LIST;
