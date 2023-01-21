import AddTodo from "@/Component/AddTodo";
import TodoCard from "@/Component/TodoCard";
import { MainContainer, TodoContainer } from "./styles";

const MainPage = () => {
  return (
    <MainContainer>
      <AddTodo />
      <TodoContainer>
        <TodoCard />
        <TodoCard />
        <TodoCard />
        <TodoCard />
        <TodoCard />
        <TodoCard />
        <TodoCard />
        <TodoCard />
      </TodoContainer>
    </MainContainer>
  );
};

export default MainPage;
