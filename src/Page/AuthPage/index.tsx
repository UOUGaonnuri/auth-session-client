import { ButtonContainer } from "@/Styles/Buttons/styles";
import {
  AuthContainer,
  AuthForm,
  CommonButton,
  FormInput,
  FormInputButton,
  Title,
} from "./styles";

const AuthPage = () => {
  return (
    <AuthContainer>
      <Title> Hello</Title>
      <AuthForm>
        <FormInput type="text" placeholder="Username" />
        <FormInput type="password" placeholder="Password" />
        <ButtonContainer>
          <FormInputButton value="Sign In" />
          <CommonButton>Sign Up</CommonButton>
        </ButtonContainer>
      </AuthForm>
    </AuthContainer>
  );
};

export default AuthPage;
