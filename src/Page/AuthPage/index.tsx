import { ButtonContainer } from "@/Styles/Buttons/styles";
import { Container } from "@/Styles/Container/styles";
import {
  AuthForm,
  CommonButton,
  FormInput,
  FormInputButton,
  Title,
} from "./styles";

const AuthPage = () => {
  return (
    <Container>
      <Title> Hello</Title>
      <AuthForm>
        <FormInput type="text" placeholder="Username" />
        <FormInput type="password" placeholder="Password" />
        <ButtonContainer>
          <FormInputButton value="Sign In" />
          <CommonButton>Sign Up</CommonButton>
        </ButtonContainer>
      </AuthForm>
    </Container>
  );
};

export default AuthPage;
