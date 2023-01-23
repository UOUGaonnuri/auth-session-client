import AddTodo from "@/Component/AddTodo";
import TodoCard from "@/Component/TodoCard";
import { CustomAxios } from "@/Service/API/CustomAxios";
import { List } from "@mui/material";
import { useEffect } from "react";
import { MainContainer } from "./styles";

const MainPage = () => {
  useEffect(() => {
    CustomAxios.get("/api/v1/todo/test")
      .then((res) => {
        console.log(res);
      })
      .catch((ex) => {
        console.log(ex);
      });
  }, []);

  return (
    <MainContainer>
      <AddTodo />
      <List
        sx={{
          marginTop: "15px",
          width: "100%",
          maxWidth: 750,
          position: "relative",
          overflow: "auto",
          maxHeight: 400,
          "& ul": { padding: 0 },
        }}
      >
        <TodoCard />
        <TodoCard />
        <TodoCard />
        <TodoCard />
        <TodoCard />
        <TodoCard />
        <TodoCard />
      </List>
    </MainContainer>
  );
};

export default MainPage;
