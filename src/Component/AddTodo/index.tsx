import { userState } from "@/Store/Data/User/User";
import { Button, Grid, TextField } from "@mui/material";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import TodoService from "@/Service/Todo/TodoService";

const AddTodo = () => {
  const [todoContent, setTodoContent] = useState("");
  const userInfo = useRecoilValue(userState);

  const onChangeTodoContent = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setTodoContent(e.target.value);
  };

  const onClickSubmit = () => {
    TodoService.addTodoRequest({
      userId: userInfo.userId,
      content: todoContent,
    })
      .then(() => {
        alert("Todo 가 등록되었습니다.");
      })
      .catch(() => {
        alert("Todo 등록에 실패하였습니다.");
      });
  };

  return (
    <Grid container style={{ marginTop: 10, width: "100%", maxWidth: "750px" }}>
      <Grid xs={11} md={11} item style={{ paddingRight: 16 }}>
        <TextField
          placeholder="Add Todo here"
          fullWidth
          value={todoContent}
          onChange={onChangeTodoContent}
        ></TextField>
      </Grid>
      <Grid xs={1} md={1} item>
        <Button
          fullWidth
          style={{ height: "100%" }}
          color="secondary"
          variant="outlined"
          onClick={onClickSubmit}
        >
          +
        </Button>
      </Grid>
    </Grid>
  );
};

export default AddTodo;
