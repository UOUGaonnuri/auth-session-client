import { Button, Grid, TextField } from "@mui/material";

const AddTodo = () => {
  return (
    <Grid container style={{ marginTop: 10, width: "100%", maxWidth: "750px" }}>
      <Grid xs={11} md={11} item style={{ paddingRight: 16 }}>
        <TextField placeholder="Add Todo here" fullWidth></TextField>
      </Grid>
      <Grid xs={1} md={1} item>
        <Button
          fullWidth
          style={{ height: "100%" }}
          color="secondary"
          variant="outlined"
        >
          +
        </Button>
      </Grid>
    </Grid>
  );
};

export default AddTodo;
