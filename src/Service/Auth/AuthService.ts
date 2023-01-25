import { LoginForm } from "@/Store/Type/Auth/Auth";
import { CustomAxios } from "../API/CustomAxios";

export const USER_NAME_SESSION_ATTRIBUTE_NAME = "AuthenticatedUser";

class AuthService {
  loginRequest(params: LoginForm) {
    return CustomAxios.post("/api/auth/v1/login", params);
  }

  createBasicAuthToken(username: string, password: string) {
    return "Basic " + window.btoa(username + ":" + password);
  }

  loginSuccess(params: LoginForm) {
    sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, params.userName);
    this.setupAxiosInterceptors(
      this.createBasicAuthToken(params.userName, params.password)
    );
  }

  setupAxiosInterceptors(token: string) {
    CustomAxios.interceptors.request.use((config) => {
      if (this.isUserLoggedIn()) {
        config.headers.authrization = token;
      }
      return config;
    });
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
    if (user === null) return false;
    return true;
  }

  logout() {
    return CustomAxios.post("/api/auth/v1/logout");
  }

  removeUserData() {
    sessionStorage.removeItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
  }
}

export default new AuthService();
