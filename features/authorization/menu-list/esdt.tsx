import React from "react";
import HomeIcon from "@heroicons/react/24/outline/HomeIcon";
import HomeIconSolid from "@heroicons/react/24/solid/HomeIcon";
import AdjustmentsHorizontalIcon from "@heroicons/react/24/outline/AdjustmentsHorizontalIcon";
import AdjustmentsHorizontalIconSolid from "@heroicons/react/24/solid/AdjustmentsHorizontalIcon";
import ClipboardDocumentCheckIcon from "@heroicons/react/24/outline/ClipboardDocumentCheckIcon";
import ClipboardDocumentCheckIconSolid from "@heroicons/react/24/solid/ClipboardDocumentCheckIcon";
import UserGroupIcon from "@heroicons/react/24/outline/UserGroupIcon";
import UserGroupIconSolid from "@heroicons/react/24/solid/UserGroupIcon";
import InformationCircleIcon from "@heroicons/react/24/outline/InformationCircleIcon";
import InformationCircleIconSolid from "@heroicons/react/24/solid/InformationCircleIcon";
import CalendarIcon from "@heroicons/react/24/outline/CalendarIcon";
import CalendarIconSolid from "@heroicons/react/24/solid/CalendarIcon";
import CalendarDaysIcon from "@heroicons/react/24/outline/CalendarDaysIcon";
import CalendarDaysIconSolid from "@heroicons/react/24/solid/CalendarDaysIcon";
import CalculatorIcon from "@heroicons/react/24/outline/CalculatorIcon";
import CalculatorIconSolid from "@heroicons/react/24/solid/CalculatorIcon";
import DocumentTextIcon from "@heroicons/react/24/outline/DocumentTextIcon";
import DocumentTextIconSolid from "@heroicons/react/24/solid/DocumentTextIcon";
import ChatBubbleLeftEllipsisIcon from "@heroicons/react/24/outline/ChatBubbleLeftEllipsisIcon";

import FolderIcon from "@heroicons/react/24/outline/FolderIcon";
import FolderIconSolid from "@heroicons/react/24/solid/FolderIcon";

import { TrophyIcon } from "@heroicons/react/24/solid";
import { ChartBarIcon } from "@heroicons/react/24/outline";
import IMenuItem from "../types/IMenuItem";
import TeamScorecardRules from "@/pages/esdt/administration/TeamScorecardRules";
import RewardAndRecognition from "@/pages/esdt/RewardAndRecognition";
import DailyUnAuthorizedReporting from "@/pages/esdt/DailyUnAuthorizedReporting";
import TeamDashboard from "@/pages/esdt/TeamDashboard/TeamDashboard";

const Dashboard = React.lazy(() => import("@/pages/esdt/Dashboard"));
const DailyChecklistMaster = React.lazy(
  () => import("@/pages/esdt/administration/DailyChecklistMaster"),
);
const SDTTeamMapping = React.lazy(
  () => import("@/pages/esdt/administration/SDTTeamMapping"),
);
const CCARActionReport = React.lazy(
  () => import("@/pages/esdt/CCARActionReport"),
);
const Daily5SChecklist = React.lazy(
  () => import("@/pages/esdt/Daily5SChecklist"),
);
const DailyAttendanceSheet = React.lazy(
  () => import("@/pages/esdt/DailyAttendanceSheet"),
);
const IndividualTrainingPlan = React.lazy(
  () => import("@/pages/esdt/IndividualTrainingPlan"),
);
const IndividualSkills = React.lazy(
  () => import("@/pages/esdt/IndividualSkills"),
);
const QCProjects = React.lazy(() => import("@/pages/esdt/QCProjects"));
const QualityIssues = React.lazy(() => import("@/pages/esdt/QualityIssues"));

const SDTTeamStructure = React.lazy(
  () => import("@/pages/esdt/SDTTeamStructure"),
);
const Improvements = React.lazy(() => import("@/pages/esdt/Improvements"));

const SdtMaturityAudit = React.lazy(
  () => import("@/pages/esdt/SdtMaturityAudit"),
);

const TeamResponsibility = React.lazy(
  () => import("@/pages/esdt/TeamResponsibility"),
);
const TeamScorecard = React.lazy(() => import("@/pages/esdt/TeamScorecard"));
const AddHolidays = React.lazy(() => import("@/pages/esdt/AddHolidays"));

const DailyReporting = React.lazy(() => import("@/pages/esdt/DailyReporting"));
const DailyNonReported = React.lazy(
  () => import("@/pages/esdt/DailyNonReported"),
);

const FicCoordinatorMap = React.lazy(
  () => import("@/pages/esdt/administration/FicCoordinatorMap"),
);

const SdtUsage = React.lazy(() => import("@/pages/esdt/SdtUsage"));

const PageNotFound = React.lazy(() => import("@/pages/PageNotFound"));

const ESDT_MENU_LIST: IMenuItem[] = [
  {
    id: 51,
    name: "",
    icon: <HomeIcon className="w-5 h-5" />,
    iconSelected: <HomeIconSolid className="w-5 h-5" />,
    appId: 2,
    path: "",
    element: <Dashboard />,
    children: [],
    menuType: "Static",
  },
  {
    id: 51,
    name: "Dashboard",
    icon: <HomeIcon className="w-5 h-5" />,
    iconSelected: <HomeIconSolid className="w-5 h-5" />,
    appId: 2,
    path: "dashboard",
    element: <Dashboard />,
    children: [],
    menuType: "Normal",
  },
  {
    id: 52,
    name: "Administration",
    icon: <AdjustmentsHorizontalIcon className="w-5 h-5" />,
    iconSelected: <AdjustmentsHorizontalIconSolid className="w-5 h-5" />,
    appId: 2,
    path: "",
    element: null,
    children: [
      {
        id: 53,
        name: "Daily Checklist Master",
        icon: <ClipboardDocumentCheckIcon className="w-5 h-5" />,
        iconSelected: <ClipboardDocumentCheckIconSolid className="w-5 h-5" />,
        appId: 2,
        path: "daily-checklist-master",
        element: <DailyChecklistMaster />,
        children: [],
        menuType: "Normal",
      },
      {
        id: 54,
        name: "SDT Team Mapping",
        icon: <UserGroupIcon className="w-5 h-5" />,
        iconSelected: <UserGroupIconSolid className="w-5 h-5" />,
        appId: 2,
        path: "sdt-team-mapping",
        element: <SDTTeamMapping />,
        children: [],
        menuType: "Normal",
      },
      {
        id: 225,
        name: "Team Scorecard Rules",
        icon: <UserGroupIcon className="w-5 h-5" />,
        iconSelected: <UserGroupIconSolid className="w-5 h-5" />,
        appId: 2,
        path: "team-scorecard-rules",
        element: <TeamScorecardRules />,
        children: [],
        menuType: "Normal",
      },
      {
        id: 277,
        name: "Daily 5S Checklist Master",
        icon: <UserGroupIcon className="w-5 h-5" />,
        iconSelected: <UserGroupIconSolid className="w-5 h-5" />,
        appId: 2,
        path: "daily-checklist-master",
        element: <DailyChecklistMaster />,
        children: [],
        menuType: "Normal",
      },
      {
        id: 276,
        name: "Factory Co-ordinator",
        icon: <UserGroupIcon className="w-5 h-5" />,
        iconSelected: <UserGroupIconSolid className="w-5 h-5" />,
        appId: 2,
        path: "fic-co-ordinator-mapping",
        element: <FicCoordinatorMap />,
        children: [],
        menuType: "Normal",
      },
    ],
    menuType: "Normal",
  },
  {
    id: 55,
    name: "SDT Team Structure",
    icon: <UserGroupIcon className="w-5 h-5" />,
    iconSelected: <UserGroupIconSolid className="w-5 h-5" />,
    appId: 2,
    path: "sdt-team-structure",
    element: <SDTTeamStructure />,
    children: [],
    menuType: "Normal",
  },
  {
    id: 56,
    name: "Team Responsibility",
    icon: <InformationCircleIcon className="w-5 h-5" />,
    iconSelected: <InformationCircleIconSolid className="w-5 h-5" />,
    appId: 2,
    path: "team-responsibility",
    element: <TeamResponsibility />,
    children: [],
    menuType: "Normal",
  },
  {
    id: 71,
    name: "Regular Monitoring",
    icon: <FolderIcon className="w-5 h-5" />,
    iconSelected: <FolderIconSolid className="w-5 h-5" />,
    appId: 2,
    path: "",
    element: null,
    children: [
      {
        id: 60,
        name: "Team Scorecard",
        icon: <CalculatorIcon className="w-5 h-5" />,
        iconSelected: <CalculatorIconSolid className="w-5 h-5" />,
        appId: 2,
        path: "team-scorecard",
        element: <TeamScorecard />,
        children: [],
        menuType: "Normal",
      },
      {
        id: 58,
        name: "Daily Attendance Sheet",
        icon: <CalendarDaysIcon className="w-5 h-5" />,
        iconSelected: <CalendarDaysIconSolid className="w-5 h-5" />,
        appId: 2,
        path: "daily-attendance-sheet",
        element: <DailyAttendanceSheet />,
        children: [],
        menuType: "Normal",
      },
      {
        id: 59,
        name: "Daily 5S Checklist",
        icon: <ClipboardDocumentCheckIcon className="w-5 h-5" />,
        iconSelected: <ClipboardDocumentCheckIconSolid className="w-5 h-5" />,
        appId: 2,
        path: "daily-5s-checklist",
        element: <Daily5SChecklist />,
        children: [],
        menuType: "Normal",
      },
      {
        id: 65,
        name: "Individual Training Plan",
        icon: <DocumentTextIcon className="w-5 h-5" />,
        iconSelected: <DocumentTextIconSolid className="w-5 h-5" />,
        appId: 2,
        path: "ind-training-plan",
        element: <IndividualTrainingPlan />,
        children: [],
        menuType: "Normal",
      },
      {
        id: 226,
        name: "Individual Skill Matrix",
        icon: <DocumentTextIcon className="w-5 h-5" />,
        iconSelected: <DocumentTextIconSolid className="w-5 h-5" />,
        appId: 2,
        path: "ind-skills",
        element: <IndividualSkills />,
        children: [],
        menuType: "Normal",
      },
      {
        id: 62,
        name: "QC Projects",
        icon: <DocumentTextIcon className="w-5 h-5" />,
        iconSelected: <DocumentTextIconSolid className="w-5 h-5" />,
        appId: 2,
        path: "qc-projects",
        element: <QCProjects />,
        children: [],
        menuType: "Normal",
      },
      {
        id: 57,
        name: "Add Holiday/Closure",
        icon: <CalendarIcon className="w-5 h-5" />,
        iconSelected: <CalendarIconSolid className="w-5 h-5" />,
        appId: 2,
        path: "add-holidays",
        element: <AddHolidays />,
        children: [],
        menuType: "Normal",
      },
    ],
    menuType: "Normal",
  },
  {
    id: 72,
    name: "Issues / Suggestions",
    icon: <FolderIcon className="w-5 h-5" />,
    iconSelected: <FolderIconSolid className="w-5 h-5" />,
    appId: 2,
    path: "",
    element: null,
    children: [
      {
        id: 61,
        name: "CCAR Action Report",
        icon: <DocumentTextIcon className="w-5 h-5" />,
        iconSelected: <DocumentTextIconSolid className="w-5 h-5" />,
        appId: 2,
        path: "ccar-action-report",
        element: <CCARActionReport />,
        children: [],
        menuType: "Normal",
      },
      {
        id: 64,
        name: "Quality Issues",
        icon: <DocumentTextIcon className="w-5 h-5" />,
        iconSelected: <DocumentTextIconSolid className="w-5 h-5" />,
        appId: 2,
        path: "quality-issues",
        element: <QualityIssues />,
        children: [],
        menuType: "Normal",
      },
    ],
    menuType: "Normal",
  },
  {
    id: 73,
    name: "Reports",
    icon: <FolderIcon className="w-5 h-5" />,
    iconSelected: <FolderIconSolid className="w-5 h-5" />,
    appId: 2,
    path: "",
    element: null,
    children: [
      {
        id: 74,
        name: "Daily Reporting",
        icon: <CalendarDaysIcon className="w-5 h-5" />,
        iconSelected: <CalendarDaysIconSolid className="w-5 h-5" />,
        appId: 2,
        path: "daily-reporting",
        element: <DailyReporting />,
        children: [],
        menuType: "Normal",
      },
      {
        id: 75,
        name: "Daily Non Reported",
        icon: <CalendarDaysIcon className="w-5 h-5" />,
        iconSelected: <CalendarDaysIconSolid className="w-5 h-5" />,
        appId: 2,
        path: "daily-nonreported",
        element: <DailyNonReported />,
        children: [],
        menuType: "Normal",
      },
      {
        id: 284,
        name: "Daily Unauthorized Reporting",
        icon: <CalendarDaysIcon className="w-5 h-5" />,
        iconSelected: <CalendarDaysIconSolid className="w-5 h-5" />,
        appId: 2,
        path: "daily-unauthorized-reporting",
        element: <DailyUnAuthorizedReporting />,
        children: [],
        menuType: "Normal",
      },
    ],
    menuType: "Normal",
  },
  {
    id: 279,
    name: "Improvements and Rewards",
    icon: <FolderIcon className="w-5 h-5" />,
    iconSelected: <FolderIconSolid className="w-5 h-5" />,
    appId: 2,
    path: "",
    element: null,
    children: [
      {
        id: 66,
        name: "Reward And Recognition",
        icon: <TrophyIcon className="w-5 h-5" />,
        iconSelected: <TrophyIcon className="w-5 h-5" />,
        appId: 2,
        path: "reward",
        element: <RewardAndRecognition />,
        children: [],
        menuType: "Normal",
      },
      {
        id: 280,
        name: "Improvements / Kiazen",
        icon: <ChatBubbleLeftEllipsisIcon className="w-5 h-5" />,
        iconSelected: <FolderIconSolid className="w-5 h-5" />,
        appId: 2,
        path: "improvements",
        element: <Improvements />,
        children: [],
        menuType: "Normal",
      },
    ],
    menuType: "Normal",
  },
  {
    id: 282,
    name: "Audit / Assessment",
    icon: <FolderIcon className="w-5 h-5" />,
    iconSelected: <FolderIconSolid className="w-5 h-5" />,
    appId: 2,
    path: "",
    element: null,
    children: [
      {
        id: 283,
        name: "SDT Maturity Audit",
        icon: <ClipboardDocumentCheckIcon className="w-5 h-5" />,
        iconSelected: <ClipboardDocumentCheckIconSolid className="w-5 h-5" />,
        appId: 2,
        path: "sdt-maturity-audit",
        element: <SdtMaturityAudit />,
        children: [],
        menuType: "Normal",
      },
    ],
    menuType: "Normal",
  },
  {
    id: 290,
    name: "Team Dashboard",
    icon: <AdjustmentsHorizontalIcon className="w-5 h-5" />,
    iconSelected: <AdjustmentsHorizontalIconSolid className="w-5 h-5" />,
    appId: 2,
    path: "team-dashboard",
    element: <TeamDashboard />,
    children: [],
    menuType: "Normal",
  },
  {
    id: 295,
    name: "SDT Usage",
    icon: <ChartBarIcon className="w-5 h-5" />,
    iconSelected: <ChartBarIcon className="w-5 h-5" />,
    appId: 2,
    path: "sdt-usage",
    element: <SdtUsage />,
    children: [],
    menuType: "Normal",
  },

  {
    id: 0,
    name: "",
    icon: <HomeIcon className="w-5 h-5" />,
    iconSelected: <HomeIconSolid className="w-5 h-5" />,
    appId: 2,
    path: "*",
    element: <PageNotFound />,
    children: [],
    menuType: "Static",
  },
];

export default ESDT_MENU_LIST;
