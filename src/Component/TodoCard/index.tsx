import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const TodoCard = () => {
  return (
    <Card
      sx={{ minWidth: 275 }}
      style={{
        marginTop: 10,
        marginBottom: 10,
      }}
    >
      <CardContent>
        <Typography color="text.secondary">집 가서 짱깨먹기</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Done</Button>
      </CardActions>
    </Card>
  );
};

export default TodoCard;
