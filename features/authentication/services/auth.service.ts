import { AxiosResponse } from "axios";
import http from "@/features/common/utils/http-common";
import { IAuthenticatedUser, IRegisterUserForm } from "../types";

import { encryptData } from "@/features/common/utils/crypto";
import IUserDetails from "../types/IUserDetails";

interface IAuthLoginInput {
  domainId: string;
  domainPassword: string;
}
interface IAuthProfileUpdate {
  employeeId: number;
  password: string;
}

const authenticateDomainLogin = (domainId: string, domainPassword: string) => {
  // const encDomainId = encryptData(domainId);
  // const encPassword = encryptData(domainPassword);
  const encDomainId = domainId;
  const encPassword = domainPassword;
  return http.post<
    IAuthLoginInput,
    AxiosResponse<{ userData: string; authToken: string }>
  >("/auth/login", {
    domainId: encDomainId,
    domainPassword: encPassword,
  });
};

const updateProfile = (employeeId: number, password: string) => {
  const empId = employeeId;
  const empPass = password;
  return http.post<
    IAuthProfileUpdate,
    AxiosResponse<string>
  >("/auth/updateprofile", {
    employeeId: empId,
    password: empPass,
  });
};

const refreshToken = (token: string) => {
  return http.post<IAuthLoginInput, AxiosResponse<IAuthenticatedUser>>(
    "/auth/refreshtoken",
    {
      token,
    }
  );
};

const getUserEmpIdValidate = (ticketNo: string) => {
  return http.post<string, AxiosResponse<IRegisterUserForm[]>>(
    "/auth/getuser",
    {
      ticketNo,
    }
  );
};
const getSapUser = (inputText: string) => {
  return http.post<string, AxiosResponse<IUserDetails>>("/auth/get-sap-user", {
    inputText,
  });
};

const registerDomainUser = (registrationForm: IRegisterUserForm) => {
  const currRegistrationForm: IRegisterUserForm = { ...registrationForm };
  currRegistrationForm.PASSWORD = encryptData(currRegistrationForm.PASSWORD);
  return http.post<IRegisterUserForm, AxiosResponse<string>>(
    "/auth/register-user",
    currRegistrationForm
  );
};

export {
  authenticateDomainLogin,
  refreshToken,
  getUserEmpIdValidate,
  getSapUser,
  registerDomainUser,
  updateProfile
};
