import { CreateTodo, UpdateTodo } from "@/Store/Type/Todo/Todo";
import { CustomAxios } from "../API/CustomAxios";

class TodoService {
  getAllTodoRequest(userId: number) {
    return CustomAxios.get("/api/v1/todo/getTodos", {
      params: { userId: userId },
    });
  }

  addTodoRequest(params: CreateTodo) {
    return CustomAxios.post("/api/v1/todo/createTodo", params);
  }

  changeTodoStatus(todoId: number) {
    return CustomAxios.put("/api/v1/todo/changeStatus", {
      todoId: todoId,
    });
  }

  deleteTodoRequest(todoId: number) {
    return CustomAxios.delete("/api/v1/todo/deleteTodo", {
      params: {
        todoId: todoId,
      },
    });
  }
}

export default new TodoService();
