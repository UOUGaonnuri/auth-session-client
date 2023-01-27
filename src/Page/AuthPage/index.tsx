import { LoginForm } from "@/Store/Type/Auth/Auth";
import { ButtonContainer } from "@/Styles/Buttons/styles";
import { useState } from "react";
import AuthService from "@/Service/Auth/AuthService";
import {
  AuthContainer,
  AuthForm,
  CommonButton,
  FormInput,
  FormInputButton,
  Title,
} from "./styles";
import { useSetRecoilState } from "recoil";
import { userState } from "@/Store/Data/User/User";
import { UserDetail } from "@/Store/Type/User/User";

const AuthPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const setUserInfo = useSetRecoilState<UserDetail>(userState);
  const onChangeInput = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.currentTarget;
    if (target.name === "username") {
      setUsername(target.value);
    } else if (target.name === "password") {
      setPassword(target.value);
    }
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const loginForm: LoginForm = {
      userName: username,
      password: password,
    };
    AuthService.loginRequest(loginForm)
      .then((res) => {
        alert("로그인 되었습니다.");
        AuthService.loginSuccess(loginForm);
        const response: UserDetail = res.data.data;
        setUserInfo({
          userId: response.userId,
          userName: response.userName,
          userEmail: response.userEmail,
          role: response.role,
        });
        window.location.reload();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <AuthContainer>
      <Title> Hello</Title>
      <AuthForm onSubmit={onSubmit}>
        <FormInput
          name="username"
          type="text"
          placeholder="Username"
          onChange={onChangeInput}
          value={username}
        />
        <FormInput
          name="password"
          type="password"
          placeholder="Password"
          onChange={onChangeInput}
          value={password}
        />
        <ButtonContainer>
          <FormInputButton type="submit" value="Sign In" />
          <CommonButton>Sign Up</CommonButton>
        </ButtonContainer>
      </AuthForm>
    </AuthContainer>
  );
};

export default AuthPage;
