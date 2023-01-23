import AddTodo from "@/Component/AddTodo";
import TodoCard from "@/Component/TodoCard";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import { MainContainer } from "./styles";

const MainPage = () => {
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
