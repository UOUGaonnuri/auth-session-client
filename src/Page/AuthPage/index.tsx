import { LoginForm } from "@/Store/Type/Auth/Auth";
import { ButtonContainer } from "@/Styles/Buttons/styles";
import { useState } from "react";
import {
  AuthContainer,
  AuthForm,
  CommonButton,
  FormInput,
  FormInputButton,
  Title,
} from "./styles";
import { loginRequest, loginSuccess } from "@/Service/Auth/AuthService";

const AuthPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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
    loginRequest(loginForm)
      .then((res) => {
        console.log(res);
        loginSuccess(loginForm);
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
