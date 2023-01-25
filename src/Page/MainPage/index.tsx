import AddTodo from "@/Component/AddTodo";
import TodoCard from "@/Component/TodoCard";
import { List } from "@mui/material";
import { useEffect, useState } from "react";
import { MainContainer } from "./styles";
import TodoService from "@/Service/Todo/TodoService";
import { userState } from "@/Store/Data/User/User";
import { useRecoilValue } from "recoil";
import { TodoContent } from "@/Store/Type/Todo/Todo";

const MainPage = () => {
  const userInfo = useRecoilValue(userState);
  const [todos, setTodos] = useState<TodoContent[]>([]);

  useEffect(() => {
    TodoService.getAllTodoRequest(userInfo.userId)
      .then((res) => {
        const response: TodoContent[] = res.data.data;
        setTodos(response);
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
        {todos.map((todo, index) => {
          console.log(todo);
          return (
            <TodoCard
              key={index}
              todoId={todo.todoId}
              todoStatus={todo.status}
              todoContent={todo.content}
            />
          );
        })}
      </List>
    </MainContainer>
  );
};

export default MainPage;
