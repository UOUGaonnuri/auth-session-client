import styled, { css } from "styled-components";
import { styled as MUIStyled, TextField } from "@mui/material";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TodoInputField = MUIStyled(TextField)({
  outline: "1px",
});

export const TodoContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 50%;
  overflow-x: hidden;
`;
