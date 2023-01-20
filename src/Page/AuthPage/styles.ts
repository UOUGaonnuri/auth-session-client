import styled, { css } from "styled-components";
import { styled as MUIStyled } from "@mui/system";

export const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

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

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const ButtonCSS = css`
  cursor: pointer;
  width: 100%;
  padding: 7px 20px;
  color: white;
  text-align: center;
  border-radius: 10px;
  background-color: #848484;
  margin: 5px 10px 20px 10px;
`;

export const FormInputButton = styled.input`
  ${ButtonCSS}
`;

export const CommonButton = styled.button`
  ${ButtonCSS}
`;
