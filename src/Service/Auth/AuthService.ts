import { LoginForm, RegisterForm } from "@/Store/Type/Auth/Auth";
import { CustomAxios } from "../API/CustomAxios";

export function registerRequest(params: RegisterForm) {
  return CustomAxios.post("/api/auth/v1/register", params);
}

export function loginRequest(params: LoginForm) {
  return CustomAxios.post("/api/auth/v1/login", params);
}

export function createBasicAuthToken(username: string, password: string) {
  return "Basic " + window.btoa(username + ":" + password);
}

export function logout() {
  return CustomAxios.post("/api/auth/v1/logout");
}
