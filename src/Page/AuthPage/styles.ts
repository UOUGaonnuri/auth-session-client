import styled from "styled-components";
import { ButtonCSS } from "@/Styles/Buttons/styles";

export const Title = styled.h1`
  margin-bottom: 10px;
`;

export const AuthForm = styled.form`
  margin: 0 auto;
  width: 100%;
  max-width: 414px;
  padding: 1.3rem;
  border-radius: 14px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  h2 {
    color: #000;
  }
`;
export const FormInput = styled.input`
  width: 100%;
  padding: 10px 13px;
  margin-bottom: 10px;
  border-radius: 10px;
  text-align: center;
  background-color: #d9d9d9;
  color: #000;
`;

export const FormInputButton = styled.input`
  ${ButtonCSS}
`;

export const CommonButton = styled.button`
  ${ButtonCSS}
`;
