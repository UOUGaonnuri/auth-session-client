import { LoginForm } from "@/Store/Type/Auth/Auth";
import { CustomAxios } from "../API/CustomAxios";

export const USER_NAME_SESSION_ATTRIBUTE_NAME = "AuthenticatedUser";

function createBasicAuthToken(username: string, password: string) {
  return "Basic " + window.btoa(username + ":" + password);
}

export function loginRequest(props: LoginForm) {
  return CustomAxios.post("/api/auth/v1/login", props);
}

export function loginSuccess(props: LoginForm) {
  sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, props.userName);
  CustomAxios.interceptors.request.use((config) => {
    config.headers.authrization = createBasicAuthToken(
      props.userName,
      props.password
    );
    return config;
  });
}

export function logout() {
  sessionStorage.removeItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
}
