import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TodoService from "@/Service/Todo/TodoService";

interface TodoProps {
  todoId: number;
  todoContent: string;
  todoStatus: string;
}

const TodoCard = (props: TodoProps) => {
  const onClickDelete = () => {
    TodoService.deleteTodoRequest(props.todoId)
      .then(() => {
        alert("삭제 되었습니다.");
      })
      .catch(() => {
        alert("삭제하는 데 실패하였습니다.");
      });
  };

  const onClickChangeStatus = () => {
    TodoService.changeTodoStatus(props.todoId)
      .then(() => {
        alert("변경 되었습니다.");
      })
      .catch(() => {
        alert("변경하는 데 실패하였습니다.");
      });
  };

  return (
    <Card
      sx={{ minWidth: 275 }}
      style={{
        marginTop: 10,
        marginBottom: 10,
        width: "100%",
      }}
    >
      <CardContent>
        {props.todoStatus === "ASSIGNED" ? (
          <>
            <Typography color="text.primary">{props.todoContent}</Typography>
          </>
        ) : (
          <>
            <Typography color="text.secondary">
              {props.todoContent} (Done)
            </Typography>
          </>
        )}
      </CardContent>
      <CardActions>
        <Button size="small" onClick={onClickChangeStatus}>
          Done
        </Button>
        <Button size="small" onClick={onClickDelete}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default TodoCard;
