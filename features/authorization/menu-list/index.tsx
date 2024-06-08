import MASTER_MENU_LIST from "./master";
import AECT_MENU_LIST from "./aect";
import ESDT_MENU_LIST from "./esdt";
import EWIS_MENU_LIST from "./ewis";
import SUGGESTION_MENU_LIST from "./suggestion";
import FACTORYSTATUS_MENU_LIST from "./factorystatus";
import VOC_MENU_LIST from "./voc";
import QCPROJECTS_MENU_LIST from "./qcprojects";
import ANDON_MENU_LIST from "./andon";

import { getFlatMenuList } from "../utils";

const APP_MENUS = [
  {
    appId: 1,
    routeMaster: "master",
    menuList: MASTER_MENU_LIST,
    menuFlatList: [...getFlatMenuList(MASTER_MENU_LIST)],
  },
  {
    appId: 2,
    routeMaster: "esdt",
    menuList: ESDT_MENU_LIST,
    menuFlatList: [...getFlatMenuList(ESDT_MENU_LIST)],
  },
  {
    appId: 3,
    routeMaster: "aect",
    menuList: AECT_MENU_LIST,
    menuFlatList: [...getFlatMenuList(AECT_MENU_LIST)],
  },
  {
    appId: 4,
    routeMaster: "ewis",
    menuList: EWIS_MENU_LIST,
    menuFlatList: [...getFlatMenuList(EWIS_MENU_LIST)],
  },
  {
    appId: 5,
    routeMaster: "suggestion",
    menuList: SUGGESTION_MENU_LIST,
    menuFlatList: [...getFlatMenuList(SUGGESTION_MENU_LIST)],
  },
  {
    appId: 6,
    routeMaster: "factorystatus",
    menuList: FACTORYSTATUS_MENU_LIST,
    menuFlatList: [...getFlatMenuList(FACTORYSTATUS_MENU_LIST)],
  },
  {
    appId: 7,
    routeMaster: "voc",
    menuList: VOC_MENU_LIST,
    menuFlatList: [...getFlatMenuList(VOC_MENU_LIST)],
  },
  {
    appId: 8,
    routeMaster: "qcprojects",
    menuList: QCPROJECTS_MENU_LIST,
    menuFlatList: [...getFlatMenuList(QCPROJECTS_MENU_LIST)],
  },
  {
    appId: 9,
    routeMaster: "andon",
    menuList: ANDON_MENU_LIST,
    menuFlatList: [...getFlatMenuList(ANDON_MENU_LIST)],
  },
];

export {
  MASTER_MENU_LIST,
  AECT_MENU_LIST,
  ESDT_MENU_LIST,
  EWIS_MENU_LIST,
  SUGGESTION_MENU_LIST,
  FACTORYSTATUS_MENU_LIST,
  VOC_MENU_LIST,
  QCPROJECTS_MENU_LIST,
  ANDON_MENU_LIST,
  APP_MENUS,
};
