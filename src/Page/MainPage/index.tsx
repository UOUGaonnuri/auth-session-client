import TodoCard from "@/Component/TodoCard";
import { Container } from "@/Styles/Container/styles";
import { TextField } from "@mui/material";

const MainPage = () => {
  return (
    <Container>
      <TextField id="standard-search" type="search" variant="standard" />
      <TodoCard />
    </Container>
  );
};

export default MainPage;
