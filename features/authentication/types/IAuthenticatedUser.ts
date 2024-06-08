interface IAuthenticatedUser {
  ID: number;
  NAME: string;
  TICKET_NO: string;
  ROLES: number[];
  BASE_LOCN_ID: number;
  AUTH_TOKEN: string;
  PHOTO_PATH: string;
  LOGGED_IN: number;
  SDT_TEAM_LIST: number[];
  IS_TEAM_MEMBER: string;
}

export default IAuthenticatedUser;
